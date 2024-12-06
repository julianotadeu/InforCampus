import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Login.css';

const LoginAluno = () => {
    const [registroAcademico, setRegistroAcademico] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Usuário do tipo Aluno
    const user = { registroAcademico: '123456789', password: 'Aluno123', role: 'Aluno' };

    const handleLogin = () => {
        if (registroAcademico === user.registroAcademico && password === user.password) {
            navigate('/homeAluno'); // Redirecionar após o login
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
            <h1>Login do Aluno</h1>
            <div className="usuario">
                <label>Registro Academico</label>
                <input
                    placeholder="Registro Acadêmico (RA)"
                    required
                    value={registroAcademico}
                    onChange={(e) => setRegistroAcademico(e.target.value)}
                    maxLength={9}
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
            <button type="button" onClick={handleLogin}>Entrar</button>                <button type="button" id='voltar' onClick={handleBack}>Voltar</button>
        </div>
    );
};

export default LoginAluno;
