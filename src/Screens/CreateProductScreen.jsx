import React from 'react'
import Navbar from '../Componets/Navbar'
import Forms from '../Componets/Forms'
import { getAuthenticatedHeaders } from '../utils/feching'
import { Link } from 'react-router-dom'

const CreateProductScreen = () => {
    const actionCreateProduct = async (formState) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
            method: 'POST',
            headers: getAuthenticatedHeaders(),
            body: JSON.stringify(formState)
        })
        const data = await response.json()
        return data
    }
    /*  title,price,stock,description,category*/
    const form_fields = [
        {
            lebel_text: 'Title',
            field_component: 'INPUT',
            field_container_props: {
                className: 'Product'
            },
            field_data_props: {
                name: 'title',
                id: 'title',
                placeholder: 'TV',
                type: 'text'
            }
        }, {
            lebel_text: 'Precio',
            field_component: 'INPUT',
            field_container_props: {
                className: 'Product'
            },
            field_data_props: {
                name: 'price',
                id: 'price',
                placeholder: '$100',
                type: 'number'
            }
        }, {
            lebel_text: 'Stock',
            field_component: 'INPUT',
            field_container_props: {
                className: 'Product'
            },
            field_data_props: {
                name: 'stock',
                id: 'stock',
                placeholder: '5',
                type: 'number'
            }
        }, {
            lebel_text: 'Descripcion',
            field_component: 'INPUT',
            field_container_props: {
                className: 'Product'
            },
            field_data_props: {
                name: 'description',
                id: 'description',
                placeholder: 'TV de 50" perfecto para tu hogar',
                type: 'text'
            }
        }, {
            lebel_text: 'Categoria',
            field_component: 'INPUT',
            field_container_props: {
                className: 'Product'
            },
            field_data_props: {
                name: 'category',
                id: 'category',
                placeholder: 'Hogar',
                type: 'text'
            }
        }
    ]
    const initial_state_form = {
        title: '',
        price: '',
        stock: '',
        category: '',
        description: '',
    }
    return (
        <div>
            <Navbar />
            <h1>Crea un nuevo producto</h1>
            <Forms action={actionCreateProduct} form_fields={form_fields} initial_state_form={initial_state_form}>
                <button type='submit'>Crear</button>
                <Link to={'/home'}>Volver</Link>
            </Forms>
        </div>
    )
}

export default CreateProductScreen