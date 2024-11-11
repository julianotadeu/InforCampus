import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [userType, setUserType] = useState('');

    const handleRoleSelection = (role) => {
        setSelectedRole(role);
        setIsRegistering(false);
    };

    const handleBack = () => {
        setSelectedRole(null);
        setIsRegistering(false);
    };

    const handleRegisterClick = () => {
        setIsRegistering(true);
        setSelectedRole('Aluno');
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div className="container">
            {!selectedRole && (
                <div className="buttonAccess">
                    <img className='image-container' src="/InfoCampus.png" alt="Logotipo da InforCampus" />
                    <h1>Área de Acesso</h1>
                    <button onClick={() => handleRoleSelection('Aluno')}>Aluno</button>
                    <button onClick={() => handleRoleSelection('Professor')}>Professor</button>
                    <button onClick={() => handleRoleSelection('Coordenacao')}>Coordenação</button>
                    <p onClick={handleRegisterClick} className="register-link">
                        Ainda não tem conta? Cadastre-se
                    </p>
                </div>
            )}

            {isRegistering && (
                <form>
                    <h1>Cadastro</h1>
                    <div className='usuario'>
                        <label>Tipo de Usuário</label>
                        <select value={userType} onChange={handleUserTypeChange}>
                            <option value="">Selecione</option>
                            <option value="Aluno">Aluno</option>
                            <option value="Professor/Coordenação">Professor/Coordenação</option>
                        </select>
                    </div>
                    
                    {userType === 'Aluno' && (
                        <>
                            <div className='usuario'>
                                <label>Nome Completo</label>
                                <input type="text" placeholder='Nome Completo' />
                            </div>
                            <div className='usuario'>
                                <label>CPF</label>
                                <input type="text" placeholder='CPF' />
                            </div>
                            <div className='usuario'>
                                <label>Email</label>
                                <input type="email" placeholder='E-mail' />
                            </div>
                            <div className='usuario'>
                                <label>Data de Nascimento</label>
                                <input type="date" />
                            </div>
                            <div className='senha'>
                                <label>Senha</label>
                                <input type="password" placeholder='Senha' />
                            </div>
                            <div className='senha'>
                                <label>Confirme a Senha</label>
                                <input type="password" placeholder='Confirme a Senha' />
                            </div>
                        </>
                    )}
                    
                    {userType === 'Professor/Coordenação' && (
                        <>
                            <div className='usuario'>
                                <label>Email Corporativo</label>
                                <input type="email" placeholder='E-mail corporativo' />
                            </div>
                            <div className='senha'>
                                <label>Senha</label>
                                <input type="password" placeholder='Senha' />
                            </div>
                            <div className='senha'>
                                <label>Confirme a Senha</label>
                                <input type="password" placeholder='Confirme a Senha' />
                            </div>
                        </>
                    )}
                    
                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={handleBack}>Voltar</button>
                </form>
            )}

            {selectedRole && !isRegistering && (
                <form>
                    <h1>Acesso do {selectedRole}</h1>
                    <div className='usuario'>
                        <label>Usuário</label>
                        <input
                            type={selectedRole === 'Aluno' ? "text" : "email"}
                            placeholder={selectedRole === 'Aluno' ? 'Registro Acadêmico (RA)' : 'E-mail corporativo'}
                        />
                    </div>
                    <div className='senha'>
                        <label>Senha</label>
                        <input type="password" placeholder='Senha' />
                    </div>
                    <button type="button" onClick={handleBack}>Voltar</button>
                </form>
            )}
        </div>
    );
};

export default Login;