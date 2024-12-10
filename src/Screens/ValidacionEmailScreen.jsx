import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ValidacionEmailScreen = () => {
    const navegador = useNavigate()
    const [email, setEmail] = useState()
    const [countdown, setCountdown] = useState(60)
    const [mostrarButton, setMostrarButton] = useState(false)
    const intervaloRef = useRef()

    useEffect(() => {
        const getEmail = sessionStorage.getItem('email-sin-verificar')
        if (getEmail) {
            setEmail(getEmail)
        } else {
            navegador('/')
        }
    }, [navegador])

    useEffect(() => {
        startCountdown()
        return () => clearInterval(intervaloRef.current)
    }, [])

    const startCountdown = () => {
        clearInterval(intervaloRef.current)
        intervaloRef.current = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1
                } else {
                    clearInterval(intervaloRef.current)
                    setMostrarButton(true)
                    return 0
                }
            })
        }, 1000)
    }

    const resetCountdown = () => {
        setCountdown(60)
        setMostrarButton(false)
        startCountdown()
    }

    const handleValidation = async () => {
        const response = await fetch(`http://localhost:3000/api/auth/revalidation/${email}`, {
            method: 'POST'
        })
        const data = await response.json()
    }

    const handlesFuntions = () => {
        handleValidation()
        resetCountdown()
    }

    const formatoTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60)
        const remaingSeconds = segundos % 60
        return `${minutos}:${remaingSeconds < 10 ? '0' : ''}${remaingSeconds}`
    }

    return (
        <div>
            <h1>Falta verificar tu identidad</h1>
            <p>Se envio un correo de verificacion a tu direccion de email</p>
            <div>
                <p>Si no se envio puedes volver a intentar en: {formatoTiempo(countdown)}</p>
                {mostrarButton && <button onClick={handlesFuntions}>Reenviar Email</button>}
                <Link to={'/'}>Ingresar</Link>
            </div>
        </div>
    )
}

export default ValidacionEmailScreen