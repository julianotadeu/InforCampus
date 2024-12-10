/*import React, { useState } from 'react';
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
                    <img className='image-container' src="/InforCampus/InfoCampus.png" alt="Logotipo da InforCampus" />
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

export default Login;*/

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate
import './Login.css';

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();  // Inicializando o hook useNavigate

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

    const handleLogin = () => {
        // Navegando para a página Home
        navigate('/home');
    };

    return (
        <div className="container">
            {!selectedRole && (
                <div className="buttonAccess">
                    <img className='image-container' src="/InforCampus/InfoCampus.png" alt="Logotipo da InforCampus" />
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
                    <button type="button" onClick={handleLogin}>Entrar</button>  {/* Botão Entrar adicionado */
/*<button type="button" onClick={handleBack}>Voltar</button>
</form>
)}
</div>
);
};

export default Login;*/


//Código rodando
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Login.css';

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [userType, setUserType] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // Controle de visibilidade da senha
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Controle de visibilidade da confirmação de senha
    const navigate = useNavigate();

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

    const handleLogin = () => {
        navigate('/home');
    };

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Função para alternar a visibilidade da confirmação de senha
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const [cpf, setCpf] = useState("");
    const [cpfError, setCpfError] = useState("");

    return (
        <div className="container">
            {!selectedRole && (
                <div className="buttonAccess">
                    <img className="image-container" src="/InforCampus/InfoCampus.png" alt="Logotipo da InforCampus" />
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
                    <button type="button" onClick={handleBack}>Voltar</button>
                    <h1>Cadastro</h1>
                    <div className="usuario">
                        <label>Tipo de Usuário</label>
                        <select value={userType} onChange={handleUserTypeChange}>
                            <option value="">Selecione</option>
                            <option value="Aluno">Aluno</option>
                            <option value="Professor/Coordenação">Professor/Coordenação</option>
                        </select>
                    </div>

                    {userType === 'Aluno' && (
                        <>
                            <div className="usuario">
                                <label>Nome Completo</label>
                                <input
                                    type="text"
                                    placeholder="Nome Completo"
                                    required
                                    minLength={5}
                                />
                            </div>
                            <div className="usuario">
                                <label>CPF</label>
                                <input
                                    type="text"
                                    placeholder="CPF"
                                    value={cpf}
                                    maxLength={11} // Limita o CPF a 11 números
                                    onInput={(e) => {
                                        const onlyNumbers = e.target.value.replace(/\D/g, ''); // Permite apenas números
                                        setCpf(onlyNumbers);
                                        setCpfError(""); // Limpa o erro ao corrigir
                                    }}
                                    onBlur={() => {
                                        if (cpf.length < 10) {
                                            setCpfError("O CPF deve ter no mínimo 10 números.");
                                        }
                                    }}
                                    required
                                />
                                {cpfError && <p style={{ color: "red", fontSize: "12px" }}>{cpfError}</p>}
                            </div>
                            <div className="usuario">
                                <label>Email</label>
                                <input type="email" placeholder="E-mail" required />
                            </div>
                            <div className="usuario">
                                <label>Data de Nascimento</label>
                                <input type="date" required />
                            </div>
                            <div className="senha">
                                <label>Senha</label>
                                <input type={passwordVisible ? "text" : "password"} placeholder="Senha" required />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" onChange={togglePasswordVisibility} />
                                    Mostrar Senha
                                </label>
                            </div>
                            <div className="senha">
                                <label>Confirme a Senha</label>
                                <input type={confirmPasswordVisible ? "text" : "password"} placeholder="Confirme a Senha" required />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" onChange={toggleConfirmPasswordVisibility} />
                                    Mostrar Confirmação de Senha
                                </label>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </>
                    )}

                    {userType === 'Professor/Coordenação' && (
                        <>
                            <div className="usuario">
                                <label>Email Corporativo</label>
                                <input type="email" placeholder="E-mail corporativo" required />
                            </div>
                            <div className="senha">
                                <label>Senha</label>
                                <input type={passwordVisible ? "text" : "password"} placeholder="Senha" required />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" onChange={togglePasswordVisibility} />
                                    Mostrar Senha
                                </label>
                            </div>
                            <div className="senha">
                                <label>Confirme a Senha</label>
                                <input type={confirmPasswordVisible ? "text" : "password"} placeholder="Confirme a Senha" required />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" onChange={toggleConfirmPasswordVisibility} />
                                    Mostrar Confirmação de Senha
                                </label>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </>
                    )}

                </form>
            )}

            {selectedRole && !isRegistering && (
                <form>
                    <h1>Acesso do {selectedRole}</h1>
                    <div className="usuario">
                        <label>Usuário</label>
                        <input
                            type={selectedRole === 'Aluno' ? "text" : "email"}
                            placeholder={selectedRole === 'Aluno' ? 'Registro Acadêmico (RA)' : 'E-mail corporativo'}
                            required
                        />
                    </div>
                    <div className="senha">
                        <label>Senha</label>
                        <input type={passwordVisible ? "text" : "password"} placeholder="Senha" required />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" onChange={togglePasswordVisibility} />
                            Mostrar Senha
                        </label>
                    </div>
                    <button type="button" onClick={handleLogin}>Entrar</button>
                    <button type="button" onClick={handleBack}>Voltar</button>
                </form>
            )}
        </div>
    );
};

export default Login;
*/

//Testando autenticação


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Login.css';

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const [userType, setUserType] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [cpf, setCpf] = useState("");
    const [cpfError, setCpfError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Lista de usuários pré-definidos
    const users = [
        { role: 'Aluno', email: 'aluno@exemplo.com', password: 'senha123' },
        { role: 'Professor', email: 'professor@exemplo.com', password: 'senha123' },
        { role: 'Coordenacao', email: 'coordenacao@exemplo.com', password: 'senha123' },
    ];

    const handleRoleSelection = (role) => {
        if (role === 'Aluno'){
            navigate('/loginAluno')
        }

        if (role === 'Professor'){
            navigate('/loginProfessores')
        }

        if (role === 'Coordenacao'){
            navigate('/loginCoordenacao')
        }
        setSelectedRole(role);
        setIsRegistering(false);
    };

    const handleBack = () => {
        setSelectedRole(null);
        setIsRegistering(false);
    };

    const handleRegisterClick = () => {
        navigate('/cadastro')
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleLogin = () => {
        // Verificando se o usuário existe na lista de usuários
        const user = users.find(user => user.email === email && user.password === password && user.role === selectedRole);

        if (user) {
            navigate('/home');
        } else {
            setErrorMessage('Usuário ou senha incorretos!');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="container">
            {!selectedRole && (
                <div className="buttonAccess">
                    <img className="image-container" src="/InforCampus/InfoCampus.png" alt="Logotipo da InforCampus" />
                    <h1>Área de Acesso</h1>
                    <button onClick={() => handleRoleSelection('Aluno')}>Aluno</button>
                    <button onClick={() => handleRoleSelection('Professor')}>Professor</button>
                    <button onClick={() => handleRoleSelection('Coordenacao')}>Coordenação</button>
                    <p onClick={handleRegisterClick} className="register-link">
                        Ainda não tem conta? Cadastre-se!
                    </p>
                </div>
            )}

            {isRegistering && (
                <form>
                    <button type="button" onClick={handleBack}>Voltar</button>
                    <h1>Cadastro</h1>
                    <div className="usuario">
                        <label>Tipo de Usuário</label>
                        <select value={userType} onChange={handleUserTypeChange}>
                            <option value="">Selecione</option>
                            <option value="Aluno">Aluno</option>
                            <option value="Professor/Coordenação">Professor/Coordenação</option>
                        </select>
                    </div>
                </form>
            )}

            {selectedRole && !isRegistering && (
                <form>
                    <h1>Acesso do {selectedRole}</h1>
                    <div className="usuario">
                        <label>Usuário</label>
                        <input
                            type={selectedRole === 'Aluno' ? "text" : "email"}
                            placeholder={selectedRole === 'Aluno' ? 'Registro Acadêmico (RA)' : 'E-mail corporativo'}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="senha">
                        <label>Senha</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Senha"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" onChange={togglePasswordVisibility} />
                            Mostrar Senha
                        </label>
                    </div>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    <button type="button" onClick={handleLogin}>Entrar</button>
                    <button type="button" onClick={handleBack}>Voltar</button>
                </form>
            )}
        </div>
    );
};

export default Login;
