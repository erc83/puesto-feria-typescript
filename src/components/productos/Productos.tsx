import Producto from '../producto/Producto'
// import stock from '../../data/stockSucursal1.json'
import { ProductoProps } from '../../models/models'

// ProductoProps funciona igual interface ProductoProps, pero esta importado
// interface ProductoProps {
//     id: number,
//     nombre:string,
//     precio: number,
//     cantidad: number,
//     unidad: string,
//     imagen: string
// }

// este es un array de objetos
interface ProductosProps{
    productos: ProductoProps[]
}

const Productos = ({productos}: ProductosProps) => {
    return (   
        <div className="card-group">
                {
                    productos.map((producto, index) => 
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
