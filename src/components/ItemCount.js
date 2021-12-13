import React, {useState} from 'react'

/* function ItemCount({stock, initial, onAdd}) {
    const [contador, setNum] = useState(0);
    stock = 5;
    return (
        <div className="text-center">
            <div><span>{contador}</span></div>
            <button className="aumentar btn btn-success" onClick={ () => {
            if(contador < 5){                
                setNum(contador + 1)}
            }}>+</button>
            <button className="disminuir btn btn-danger" onClick={ () => {
            if(contador < 1){                
                setNum(contador - 1)}
            }}>-</button>
        </div>
    )
} */
/* 
function ItemCount({stock, initial, onAdd}){
    let num = initial;
    let [contador, setNum] = useState(num)
    return (
        <div className="text-center">
            <div className="container my-3">
                <span className="btn btn-danger mx-3" onClick={ () => {
                    if(contador < stock){
                        setNum(contador + 1)
                    }
                }}>+</span>
                <span>{contador}</span>
                <span className="btn btn-success mx-3" onClick={ () => {
                    if((contador <= stock) && (contador !== 0)){
                        setNum(contador - 1)
                    }
                }}>-</span>
            </div>
            <div>
                <button className="btn btn-primary" onClick={ () => {
                    if((contador !== stock) && (contador !== 0)){
                        alert(`Se agregaron ${contador} productos al carrito`)
                    }
                }}>Agregar a carrito</button>
            </div>
        </div>
    )
} */

const ItemCount = ({stock, initial, onAdd}) => {
      const [contador, setNum] = useState(initial);
      return (
          <div style={{backgroundColor: '#2c3e50', borderRadius: '25px'}} className="text-center container py-2">
              <div>
                  <button onClick={ () => 
                        contador > 0 && setNum(contador - 1)
                        } className="btn btn-danger">-
                    </button>
                  <span style={{backgroundColor: '#ecf0f1', borderRadius: '25px'}}className="mx-5 p-2">{contador}</span>
                  <button onClick={ () => 
                        contador < stock && setNum(contador + 1)
                        } className="btn btn-success">+
                    </button>
              </div>
              <div>
                    <p style={{color: '#000000'}} className="h4"> Stock disponible: {stock - contador}</p>
                    <button className="btn btn-primary" onClick={() => onAdd(contador)} disabled={contador > stock || contador <= 0}>Agregar al carrito</button>
                </div>
            </div>
      );
  };


export default ItemCount
