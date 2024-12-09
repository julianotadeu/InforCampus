import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Login.css';

const LoginProfessor = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Usuário do tipo Professor
    const user = { email: '', password: '', role: 'Professor' }; //email: 'professor@exemplo.com', password: 'Professor123'

    const handleLogin = () => {
        if (email === user.email && password === user.password) {
            navigate('/homeProfessores'); // Redirecionar após o login
        } else {
            setErrorMessage('Usuário ou senha incorretos!');
        }
    };

    const handleBack = () => {
        navigate('/')
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container">
            <h1>Login do Professor</h1>
            <div className="usuario">
                <label>E-mail</label>
                <input
                    type="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="senha">
                <label>Senha</label>
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Senha"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>


            <div className='form-container'>
                <div className="checkbox">
                    <input type="checkbox" onChange={togglePasswordVisibility} />
                    <label htmlFor="">Mostrar senha</label>
                </div>
            </div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button type="button" onClick={handleLogin}>Entrar</button>   <button type="button" id='voltar' onClick={handleBack}>Voltar</button>
        </div>
    );
};

export default LoginProfessor;