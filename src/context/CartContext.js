import React, {useState, createContext, useEffect} from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		setTotal(handleTotal());
		setPrice(handleTotalPrice());
	}, [cartItems]);

	// Agregar item
	const addItem = (item, count) => {
		let cartElement = {item, count};
		let cartAux = [];
		if (isInCart(item)) {
			console.log('El item se encuentra en el carrito');
			cartElement = cartItems.find(element => element.item.id === item.id);
			cartElement.count += count;
			cartAux = [...cartItems];
		} else {
			console.log('El item no se encuentra en el carrito');
			cartAux = [cartElement, ...cartItems];
		}

		setCartItems(cartAux);
	};
	
	// Añadir un elemento al carrito desde /cart
	const addOneItem = item => {
		if (isInCart(item)) {
			// 1. BUSCO el producto por el id.
			const cartElement = cartItems.find(element => element.item.id === item.id);
			if (cartElement.count >= 1 && cartElement.count <= 9) {
				const cart = cartItems;
				// 1.b. Mapeo el carrito
				cart.map(element => {
					// 1.c. Resto 1 al contador
					if (element.item.id === item.id) {
						element.count += 1;
					}

					return element;
				});	
				setCartItems([...cart]);
			}

		}
	};

	// Limpiar carrito, array vacio
	const clear = () => setCartItems([]);

	// Busco si el item esta dentro del carrito 
	const isInCart = item => cartItems && cartItems.some(element => element.item.id === item.id);
	
	// Quitar el item completo del carrito
	const removeItem = item => {
		if (isInCart(item)) {
			const cartElements = cartItems.filter(element => element.item.id !== item.id) || [];
			setCartItems([...cartElements]);
		}
	};

	// Quitar solo un elemento del carrito desde /cart
	const removeOneItem = item => {
		if (isInCart(item)) {
			const cartElement = cartItems.find(element => element.item.id === item.id);
			if (cartElement.count === 1) {
				removeItem(item);
			} else {
				const cart = cartItems;
				cart.map(element => {
					if (element.item.id === item.id) {
						element.count -= 1;
					}

					return element;
				});
				setCartItems([...cart]);
			}
		}
	};

	// Conseguir el precio total de los elementos
	const handleTotalPriceByItem = () => {
		const newCartItems = cartItems;
		return newCartItems.map(element =>
			({
				...element,
				price: element.item.price * element.count,
			}),
		);
	};

	// Conseguir el precio total del carrito
	const handleTotalPrice = () => {
		const cartAux = handleTotalPriceByItem();
		const initialValue = 0;
		return (
			cartAux && cartAux.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue)
		);
	};

	// Conseguir el total de elementos en el carrito
	const handleTotal = () => {
		const initialValue = 0;
		return (
			cartItems && cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.count, initialValue)
		);
	};

	return (
		<CartContext.Provider
			value={{addItem, addOneItem, removeItem, removeOneItem, clear, isInCart, cartItems, total, price,}}>
			{children}
		</CartContext.Provider>
	);
};