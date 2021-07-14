import Producto from '../producto/Producto'
import stock from '../../data/Stock.json'

const Productos = () => {
    return (   
        <div className="card-group">
                {
                    stock.map((producto, index) => 
                    <Producto
                    key={index}
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    cantidad={producto.cantidad}
                    unidad={producto.unidad}
                    imagen={producto.imagen}
                    
                    />  )
                }
        </div>
    )
}



export default Productos
