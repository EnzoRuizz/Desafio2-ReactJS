import React, {useState, createContext} from 'react';

export const ProductContext = createContext({});

export const ProductContextProvider = ({children}) => {
	const [products, setProducts] = useState([]);
	const [load, setLoad] = useState(true);

	return (
		<ProductContext.Provider
			value={{
				products,
				setProducts,
				load,
				setLoad,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};