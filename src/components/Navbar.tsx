import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin';

export function Navbar() {
    const { logout } = useLogin()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse" >
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/create"
                        style={{ width: '9em' }}
                    >
                        Registro
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/edit"
                        style={{ width: '9em' }}
                    >
                        Modificar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}