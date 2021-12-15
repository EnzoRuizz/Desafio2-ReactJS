import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
      const [contador, setNum] = useState(initial);
      return (
          <div style={{backgroundColor: '#2c3e50', borderRadius: '25px'}} className="text-center container py-2 my-3">
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
