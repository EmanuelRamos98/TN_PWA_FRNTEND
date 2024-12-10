import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Forms from '../Componets/Forms'

const RecoveryPasswordScreen = () => {
    const { reset_token } = useParams()
    const actionRecoveryPassword = async (formState) => {

        const response = await fetch('http://localhost:3000/api/auth/recovery-password/' + reset_token,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password: formState.password
                })
            }
        )
        const data = await response.json() 
        return data
    }

    const form_fields = [
        {
            label_text: 'Ingresa nueva contraseña:',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'password',
                id: 'password',
                placeholder: '',
                type: 'password'
            }
        }
    ]
    const initial_state_form = {
        password: ''
    }
    return (
        <div>
            <h1>Modifica tu contraseña </h1>
            <Forms action={actionRecoveryPassword} form_fields={form_fields} initial_state_form={initial_state_form}>
                <button type='submit'>Cambiar</button>
                <Link to='/login'>Iniciar sesion</Link>
            </Forms>
        </div>
    )
}

export default RecoveryPasswordScreen