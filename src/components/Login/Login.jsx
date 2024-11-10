import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    
    // Estado para controlar o tipo de acesso selecionado
    const [selectedRole, setSelectedRole] = useState(null);

    // Função para selecionar o tipo de acesso e exibir o formulário correspondente
    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    // Função para voltar à tela inicial
    const handleBack = () => {
        setSelectedRole(null);
    };

    return (
        <div className="container">
            {/* Botões de seleção do tipo de acesso, exibidos apenas se nenhum foi selecionado */}
            {!selectedRole ? (
                <div className="buttonAccess">
                    <img className='image-container' src="/InfoCampus.png" alt="Logotipo da InforCampus" />
                    <h1>Área de Acesso</h1>
                    <button onClick={() => handleRoleSelection('Aluno')}>Aluno</button>
                    <button onClick={() => handleRoleSelection('Professor')}>Professor</button>
                    <button onClick={() => handleRoleSelection('Coordenacao')}>Coordenação</button>
                </div>
            ) : null}

            {/* Renderiza o formulário do Aluno se o tipo de acesso selecionado for 'Aluno' */}
            {selectedRole === 'Aluno' && (
                <form>
                    <h1>Acesso do Aluno</h1>
                    <div className='usuario'>
                        <label>Usuário</label>
                        <input type="text" placeholder='Registro Acadêmico (RA)' />
                    </div>
                    <div className='senha'>
                        <label>Senha</label>
                        <input type="password" placeholder='Senha' />
                    </div>
                    <button type="button" onClick={handleBack}>Voltar</button>
                </form>
            )}

            {/* Renderiza o formulário do Professor se o tipo de acesso selecionado for 'Professor' */}
            {selectedRole === 'Professor' && (
                <form>
                    <h1>Acesso do Professor</h1>
                    <div className='usuario'>
                        <label>Usuário</label>
                        <input type="email" placeholder='E-mail corporativo' />
                    </div>
                    <div className='senha'>
                        <label>Senha</label>
                        <input type="password" placeholder='Senha' />
                    </div>
                    <button type="button" onClick={handleBack}>Voltar</button>
                </form>
            )}

            {/* Renderiza o formulário da Coordenação se o tipo de acesso selecionado for 'Coordenação' */}
            {selectedRole === 'Coordenacao' && (
                <form>
                    <h1>Acesso da Coordenação</h1>
                    <div className='usuario'>
                        <label>Usuário</label>
                        <input type="email" placeholder='E-mail corporativo' />
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
