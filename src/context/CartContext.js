import React, {useState, createContext} from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {
	const [cartItems, setCartItems] = useState([]);
    let cart = [];

	const isInCart = item => cartItems && cartItems.some(element => element.item.id === item.id);

	const addItem = (item, count) => {
		let cartElement = {item, count};
		if (isInCart(item)) {
            console.log("Se encuentra en el carrito")
			cartElement = cartItems.find(element => element.item.id === item.id);
			cartElement.count += count;
			cart = [...cartItems];
		} else {
			console.log("No se encuentra en el carrito");
			cart = [cartElement, ...cartItems];
		}
		setCartItems(cart);
	};

	const removeItem = item => {
		if (isInCart(item)) {
			const cartElements = cartItems.filter(element => element.item.id !== item.id) || [];
			setCartItems([...cartElements]);
		}
	};

	const clear = () => setCartItems([]);

	return (
		<CartContext.Provider value={{addItem, removeItem, clear, isInCart, cartItems}}>
			{children}
		</CartContext.Provider>
	);
};
