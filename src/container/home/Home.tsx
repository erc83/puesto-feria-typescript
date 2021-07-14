import styles from './home.module.css'
import Productos from "../../components/productos/Productos"

const Home = () => {
    return(
        <>
        <div>
            <h1 className={styles.titulo}>Bienvenido a mi puesto de Feria </h1>
        </div>
        <h4>Productos enviados utilizando Producto y stock desde Productos</h4>
            <Productos />
        </>
    )
}

export default Home;