import { useState } from "react"

const useForm = (form) => {

    const [formState, setFormState] = useState(form)
    const handleChange = (evento) => {
        const field_name = evento.target.name
        const field_value = evento.target.value

        setFormState((prevFormState) => ({
            ...prevFormState,
            [field_name]: field_value
        }))
    }

    const [errors, setErrors] = useState(false)
    const handleErrors = (data) => {
        if (data.message) {
            setErrors(data.message)
        }
    }

    return {
        formState,
        handleChange,
        errors,
        handleErrors
    }
}

export default useForm


