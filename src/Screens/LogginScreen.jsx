import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Forms from '../Componets/Forms'


const LogginScreen = () => {
    const navigate = useNavigate()
    const actionLoggin = async (formState) => {
        const responseHTTP = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        const data = await responseHTTP.json()
        if (data.status === 403) {
            sessionStorage.setItem('email-sin-verificar', data.payload.email)
            navigate('/validacion-email')
        }
        if (data.ok) {
            //nos guardamos el token de acceso en el session storage
            sessionStorage.setItem('access_token', data.payload.accesToken)
            sessionStorage.setItem('user_info', JSON.stringify(data.payload.user_info))
            navigate('/home')
        }
        return data
    }

    const form_fields = [
        {
            label_text: 'Ingresa tu email',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'email',
                id: 'email',
                placeholder: 'cosmefulanito@gmail.com',
                type: 'email'
            }
        },
        {
            label_text: 'Ingresa nueva contraseña:',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'password',
                id: 'password',
                placeholder: 'password',
                type: 'password'
            }
        }
    ]
    const initial_state_form = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h1>Inicia sesion</h1>
            <Forms action={actionLoggin} form_fields={form_fields} initial_state_form={initial_state_form} >
                <button type='submit'>Ingresar</button>
                <Link to='/forgot-password'>Olvide mi contraseña</Link>
            </Forms>
        </div>
    )
}

export default LogginScreen