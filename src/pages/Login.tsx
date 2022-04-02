import React, { useState } from 'react'
import '../styles/login.css'
import classNames from 'classnames';
//import RImage from '../assets/r-logo.png'
import RImage from '../assets/logo.jpg'
import fill8 from '../assets/fill8.png'
import fill13 from '../assets/fill13.png'
import fill17 from '../assets/fill17.png'
import { useForm } from '../hooks/use_form';

export const Login = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [errors, setErrors] = useState<{input: string, error: string}[]>([]);

    const [ formData, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleLogin = (e: any) => {
        if(email === '') {
            setErrors([...errors, { input: 'email', error: 'Email is required' }]);
        }
        if(password === '') {
            setErrors([...errors, { input: 'password', error: 'Password is required' }]);
        }

        if(errors.length > 0) {
            return;
        }

        
    }

    const RegisterForm = () => {
        return (
            <>
                <div className="form-group">
                    <label>NOMBRE</label>
                    <input type="text" className="input" id="first_name" placeholder="Pablo" />
                </div>
                <div className="form-group">
                    <label>APELLIDO</label>
                    <input type="text" className="input" id="last_name" placeholder="Pérez" />
                </div>
                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="email" className="input" id="email" placeholder="ejemplo@email.com" />
                </div>
                <div className="form-group">
                    <label>CONTRASEÑA</label>
                    <input type="password" className="input" id="password" placeholder="**********" />
                </div>
            </>
        )
    }

    return (
        <div className='login-body'>
            <div className='login-header'>
                <button className='login-header_menu-button'>Menú</button>
            </div>
            <div className="login-logo">
                <img src={RImage} />
            </div>
            <div className="login-form">
                <div className="login-form-header">
                    <div className={classNames('login-form-header_item signin', isLogin && 'active')} onClick={() => setIsLogin(true)}>
                        INGRESO
                    </div>
                    <div className={classNames('login-form-header_item signup', !isLogin && 'active')} onClick={() => setIsLogin(false)}>
                        REGISTRO
                    </div>
                </div>
                <div className="login-form-container">
                    <div className="login-form-body">
                        {isLogin ? (
                            <>
                                <div className="form-group">
                                    <label>EMAIL</label>
                                    <input type="email" className="input" id="email" placeholder="ejemplo@email.com" onChange={handleInputChange} value={email} />
                                </div>
                                <div className="form-group">
                                    <label>CONTRASEÑA</label>
                                    <input type="password" className="input" id="password" placeholder="**********" onChange={handleInputChange} value={password}/>
                                </div>
                            </>
                        ) : <RegisterForm />}
                    </div>
                    {isLogin && (
                        <div className="switch-container">
                            <input type="checkbox" className="switch" id="remember" />
                            <span className='switch-label'>Suscribirse al Newsletter</span>
                        </div>
                    )}
                    <div className="button-container">
                        {isLogin ? (
                            <>
                                <button className="sign-button" onClick={handleLogin}>
                                    Ingreso
                                </button>
                                <a href="#" className='forgot-password'>Olvidé Contraseña</a>
                            </>
                        ) : (
                            <button className="sign-button">
                                Registro
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <img className='fill8' src={fill8} alt="" />
            <img className='fill13' src={fill13} alt="" />
            <img className='fill17' src={fill17} alt="" />
        </div>
    )
}
