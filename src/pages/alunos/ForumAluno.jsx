import React, { useState } from 'react';
import '../../styles/pages/Forum.css';

const ForumAluno = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "João Silva (Aluno)",
            content: "Qual a data limite para entregar o trabalho final?",
            date: "Há 2 dias",
            replies: [
                {
                    id: 1,
                    author: "Prof. Ana Clara",
                    content: "A entrega é até sexta-feira, dia 15.",
                    date: "Há 1 dia",
                },
            ],
        },
    ]);
    const [newComment, setNewComment] = useState("");

    // Adiciona um novo comentário
    const handleAddComment = () => {
        if (!newComment.trim()) return;

        setComments([
            ...comments,
            {
                id: comments.length + 1,
                author: "Você (Aluno)",
                content: newComment,
                date: "Agora",
                replies: [],
            },
        ]);
        setNewComment("");
    };

    // Atualiza um comentário
    const handleEditComment = (id, newText) => {
        setComments(
            comments.map(comment =>
                comment.id === id ? { ...comment, content: newText } : comment
            )
        );
    };

    // Exclui um comentário
    const handleDeleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    // Adiciona uma resposta a um comentário
    const handleAddReply = (commentId, replyText) => {
        if (replyText.trim() === "") return;

        setComments(
            comments.map(comment =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: [
                            ...comment.replies,
                            { id: Date.now(), author: "Você (Aluno)", content: replyText, date: "Agora" },
                        ],
                    }
                    : comment
            )
        );
    };

    // Atualiza uma resposta
    const handleEditReply = (commentId, replyId, newText) => {
        setComments(
            comments.map(comment =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: comment.replies.map(reply =>
                            reply.id === replyId ? { ...reply, content: newText } : reply
                        ),
                    }
                    : comment
            )
        );
    };

    // Exclui uma resposta
    const handleDeleteReply = (commentId, replyId) => {
        setComments(
            comments.map(comment =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: comment.replies.filter(reply => reply.id !== replyId),
                    }
                    : comment
            )
        );
    };

    return (
        <div className="forum-container">
            <h1 className="forum-title">Fórum</h1>
            <div className="comments-section">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-box">
                        <p className="comment-author">
                            <strong>{comment.author}</strong>
                        </p>
                        <p className="comment-text">{comment.content}</p>
                        <p className="comment-date">{comment.date}</p>
                        <button onClick={() => {
                            const newText = prompt("Editar comentário:", comment.content);
                            if (newText) handleEditComment(comment.id, newText);
                        }}>Editar</button>
                        <button onClick={() => handleDeleteComment(comment.id)}>Excluir</button>

                        {comment.replies.map((reply) => (
                            <div key={reply.id} className="reply-box">
                                <p className="reply-author">
                                    <strong>{reply.author}</strong>
                                </p>
                                <p className="reply-text">{reply.content}</p>
                                <p className="reply-date">{reply.date}</p>
                                <button onClick={() => {
                                    const newText = prompt("Editar resposta:", reply.content);
                                    if (newText) handleEditReply(comment.id, reply.id, newText);
                                }}>Editar</button>
                                <button onClick={() => handleDeleteReply(comment.id, reply.id)}>Excluir</button>
                            </div>
                        ))}

                        {/* Adicionar nova resposta */}
                        <textarea
                            placeholder="Responder..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleAddReply(comment.id, e.target.value);
                                    e.target.value = '';
                                }
                            }}
                        />
                    </div>
                ))}

                {/* Nova área de comentário */}
                <div className="add-comment-section">
                    <textarea
                        className="add-comment-textarea"
                        placeholder="Digite seu comentário aqui..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                    <button className="add-comment-button" onClick={handleAddComment}>
                        Adicionar Comentário
                    </button>
                    <br />
                    <button className="voltar" onClick={() => window.history.back()}>Voltar</button>
                </div>
            </div>
        </div>
    );
};

export default ForumAluno;
