import React from 'react'
import useProductsDetails from '../Hooks/useProductsDetails'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Componets/Navbar'

const ProductDetailsScreen = () => {
    const { product_id } = useParams()
    const {
        product_detail_state,
        product_detail_loading_state,
        product_detail_error_state
    } = useProductsDetails(product_id)

    return (
        <div>
            <Navbar />
            {
                product_detail_loading_state
                    ? <span>Cargando... </span>
                    : <div>
                        <h1>{product_detail_state.title}</h1>
                        <p>{product_detail_state.description}</p>
                        <p>{product_detail_state.category}</p>
                        <span>Precio ${product_detail_state.price}</span>
                    </div>
            }
            <Link to={'/home'}>Volver</Link>
            {product_detail_error_state && <span>{product_detail_error_state}</span>}
        </div>
    )
}

export default ProductDetailsScreen