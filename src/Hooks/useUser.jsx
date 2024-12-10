import React, { useEffect, useState } from 'react'

const useUser = () => {
    const [user, setUser] = useState(false)
    const [userObj, setUserObj] = useState(null)
    useEffect(() => {
        const getUser = sessionStorage.getItem('user_info')
        if (getUser) {
            const parseUser = JSON.parse(getUser)
            setUserObj(parseUser)
            if (parseUser.role === 'admin') {
                setUser(true)
            }
        }
    }, [])
    return {
        user,
        userObj
    }
}

export default useUser