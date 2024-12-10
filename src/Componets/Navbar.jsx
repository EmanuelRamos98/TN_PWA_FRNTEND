import React, { useEffect, useState } from 'react'
import useUser from '../Hooks/useUser'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { user, userObj } = useUser()
    const location = useLocation()

    return (
        <div>
            {
                userObj && (
                    user ?
                        <div>
                            {userObj.name} admin
                            {
                                location.pathname !== '/create-product' &&
                                <button>
                                    <Link to={'/create-product'}>Crear Producto</Link>
                                </button>
                            }
                        </div>
                        :
                        <p>{userObj.name}</p>
                )
            }
        </div>
    )
}

export default Navbar