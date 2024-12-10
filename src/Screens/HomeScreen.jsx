import React, { useContext } from 'react'
import useProducts from '../Hooks/useProducts'
import { Link } from 'react-router-dom'
import Navbar from '../Componets/Navbar'


const HomeScreen = () => {
    const { products_state, products_loading_state, products_error_state } = useProducts()
    //Nesecito el is_authenticad_state
    
    
    return (
        <div>
            <Navbar />
            <h1>Bienvenido a Brand name</h1>
            <div>
                {
                    products_loading_state
                        ? <span>Cargando</span>
                        : (
                            products_error_state
                                ? <span>{products_error_state}</span>
                                : <div>
                                    {
                                        products_state.map(
                                            (product) => {
                                                return (
                                                    <div key={product.id}>
                                                        <h2>{product.title}</h2>
                                                        <span>{product.price}</span>
                                                        <Link to={`/products/${product.id}`}>ver +</Link>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                        )
                }
            </div>
        </div>
    )
}

export default HomeScreen