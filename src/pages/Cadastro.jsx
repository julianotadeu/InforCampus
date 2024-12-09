import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Login.css';

const Cadastro = () => {
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

    const handleRoleSelection = (role) => {
        if (role === 'Aluno'){
            navigate('/cadastroAluno')
        }

        if (role === 'Professor'){
            navigate('/cadastroProfessores')
        }

        if (role === 'Coordenacao'){
            navigate('/cadastroCoordenacao')
        }
        setSelectedRole(role);
        setIsRegistering(false);
    };

    const handleBack = () => {
        navigate('/')
    };

    const handleRegisterClick = () => {
        setIsRegistering(true);
        setSelectedRole('Aluno');
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
                    <h3>Selecione o tipo de cadastro</h3>
                    <button onClick={() => handleRoleSelection('Aluno')}>Aluno</button>
                    <button onClick={() => handleRoleSelection('Professor')}>Professor</button>
                    <button onClick={() => handleRoleSelection('Coordenacao')}>Coordenação</button>
                    <br />
                    <button className='voltar' type="button" onClick={handleBack}>Voltar</button>
                </div>
            )}
        </div>
    );
};

export default Cadastro;