import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Cadastro.css';

const CadastroAluno = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        confirmSenha: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { nome, cpf, email, senha, confirmSenha } = formData;

        if (!nome || !cpf || !email || !senha || !confirmSenha) {
            return 'Todos os campos são obrigatórios.';
        }
        if (!/^\d{11}$/.test(cpf)) {
            return 'O CPF deve conter apenas 11 números.';
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return 'Insira um e-mail válido.';
        }
        if (senha !== confirmSenha) {
            return 'As senhas não correspondem.';
        }
        if (senha.length < 6) {
            return 'A senha deve ter pelo menos 6 caracteres.';
        }
        return '';
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setErrorMessage(error);
        } else {
            setErrorMessage('');
            // Lógica para registrar o usuário
            console.log('Cadastro realizado:', formData);
            alert('Cadastro realizado com sucesso!')
            navigate('/'); // Redirecionar para a página inicial ou outra página
        }
    };

    const handleBack = () => {
        navigate('/cadastro');
    };

    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <h1>Cadastro Aluno</h1>
                <div className="usuario">
                    <label>Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="usuario">
                    <label>CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        placeholder="Apenas números"
                        value={formData.cpf}
                        onChange={handleChange}
                        maxLength="11"
                        required
                    />
                </div>
                <div className="usuario">
                    <label>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail válido"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="calendar-container">
                    <label for="calendar">Selecione uma data:</label>
                    <input type="date" id="calendar" name="calendar" class="calendar-field"/>
                </div>

                <div className="senha">
                    <label>Senha</label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="senha">
                    <label>Confirme a Senha</label>
                    <input
                        type="password"
                        name="confirmSenha"
                        placeholder="Confirme sua senha"
                        value={formData.confirmSenha}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div className="buttonAccess">
                    <button type="submit">Cadastrar</button>
                    <button type="button" className="voltar" onClick={handleBack}>
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastroAluno;
