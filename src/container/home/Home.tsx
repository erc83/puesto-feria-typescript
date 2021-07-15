import styles from './home.module.css'
import Productos from "../../components/productos/Productos"
import stock1 from "../../data/stockSucursal1.json"
import stock2 from "../../data/stockSucursal2.json"
import stock3 from "../../data/stockSucursal3.json"

const Home = () => {
    return(
        <>
            <div>p
                <h1 className={styles.titulo}>Bienvenido a mi puesto de Feria </h1>
            </div>
            <h4>Productos en stock sucursal 1</h4>
            {stock1.some(({nombre})=>nombre==="frutilla")&&<Productos productos = {stock1}/>}

            <h4>Productos en stock sucursal 2</h4>
            {stock2.some(({nombre})=>nombre==="Uva 2")&&<Productos productos = {stock2}/>}

            <h4>Productos en stock sucursal 3</h4>
            <Productos productos = {stock3}/>
        </>
    )
}

export default Home;