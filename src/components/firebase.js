import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, Timestamp, updateDoc} from 'firebase/firestore/lite';
  
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDx3C_aczPnIOjF4EvKDwhJ33-Cx7Zoc1I",
	authDomain: "ejemplo-91ed2.firebaseapp.com",
	projectId: "ejemplo-91ed2",
	storageBucket: "ejemplo-91ed2.appspot.com",
	messagingSenderId: "1027309519261",
	appId: "1:1027309519261:web:21480e7b0094bd512caf74",
	measurementId: "G-SKXWLS415L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
export class FirebaseClient {
	async getProducts() {
		try {
			const ref = collection(db, 'items');
			const docSnapshot = await getDocs(ref);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	}
  
	async getProduct(id) {
		try {
			const ref = doc(db, 'items', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id,
					...docSnapshot.data(),
				};
			}
			return null;
		} catch (error) {
			console.error('getProducts', error);
		}
	}
  
	async getProductsByCategory(category) {
		try {
			const q = query(collection(db, 'items'), where('category', '==', category));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	}
  
	async updateProductStockById(id, count) {
		const ref = doc(db, 'items', id);
		const docSnapshot = await getDoc(ref);
		if (docSnapshot.exists()) {
			const {stock} = docSnapshot.data();
			// Defino mi nuevo stock
			const newStock = stock === 0 || stock - count < 0 ? 0 : stock - count;
			// Actualizo el valor del stock
			await updateDoc(ref, {
				stock: newStock,
			});
			return true;
		}
		return null;
	}
  
	async addOrder(items, user, price, total) {
		try {
			// Mapeo mi nueva orden
			const newOrder = {
				...user,
				items,
				date: Timestamp.now().toDate(),
				price,
				total,
			};
			// Actualizo el stock de los items
			items.forEach(async element => {
				await this.updateProductStockById(element.item.id, element.count);
			});
			// Genero nueva orden
			const docRef = await addDoc(collection(db, 'orders'), newOrder);
			// Retorno el id de la nueva orden
			return docRef.id;
		} catch (error) {
			console.error('addOrder', error);
		}
	}
}
  
