import styles from './producto.module.css'
import {ProductoProps} from '../../models/models'

// interface ProductoProps {
//     id: number,
//     nombre:string,
//     precio: number,
//     cantidad: number,
//     unidad: string,
//     imagen: string
// }

const Producto = ({id, nombre, precio, cantidad, unidad, imagen}: ProductoProps) => {
    return(
        <div className="card ">
            <div className={styles.wrapper}>
            <img src={imagen} className="card-img-top" alt="imagen Fruta"></img>
            <div className="card-body">
            <h5 className="card-title">Fruta: {nombre}</h5>
            <p className="card-text">Precio: {precio} pesos.</p>
            <p className="card-text"><small className="text-muted">Id: {id}.</small></p>
            <p className="card-text"><small className="text-muted">Cantidad: {cantidad}.</small></p>
            <p className="card-text"><small className="text-muted">Unidad: {unidad}.</small></p>
            </div>
            </div>
         </div>
    )
}

export default Producto;