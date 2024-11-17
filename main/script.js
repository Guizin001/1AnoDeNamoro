let currentQuestion = 1; // Começa pela primeira pergunta

// Função para passar para a próxima pergunta
function nextQuestion(questionNumber, selectedAnswer) {
    const correctAnswersPerQuestion = {
        1: 2,  // Resposta correta para a pergunta 1 (Preto)
        2: 1,   // Resposta correta para a pergunta 2 (Supernatural)
        3: 5, // Resposta correta para a pergunta 3 (Todas as respostas acima)
        4: 2, // Resposta correta para a pergunta 4 (Sexta-feira)
        5: 2, // Resposta correta para a pergunta 5 (Viajar o mundo)
        6: 4, // Resposta correta para a pergunta 6 (Qualquer lugar com muita gente)
        7: 2, // Resposta correta para a pergunta 7 (Ocê)
        8: 4, // Resposta correta para a pergunta 8 (Churrasco)
        9: 4, // Resposta correta para a pergunta 9 (Encher o saco)
        10: 3, // Resposta correta para a pergunta 10 (Pa minha casa)
        11: 1, // Resposta correta para a pergunta 11 (Tanto faz)
    };

    // Verifica se a resposta está correta
    if (selectedAnswer === correctAnswersPerQuestion[questionNumber]) {
        // Esconde a pergunta atual
        document.querySelector(`#question-${questionNumber}`).style.display = 'none';
        currentQuestion++;

        // Se ainda não for a última pergunta, exibe a próxima
        if (currentQuestion <= 11) {
            document.querySelector(`#question-${currentQuestion}`).style.display = 'block';
        }
    } else {
        alert("Resposta errada! O quiz será reiniciado.");
        restartQuiz();
    }
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestion = 1;
    document.getElementById('quiz-container').style.display = 'block';
    for (let i = 1; i <= 11; i++) {
        document.querySelector(`#question-${i}`).style.display = 'none';
    }
    document.querySelector(`#question-1`).style.display = 'block';
}

// Função para finalizar o quiz e redirecionar para mensagem.html
function finishQuiz() {
    alert("Eu mando sua pobri! Você completou o quiz!");
    window.location.href = 'mensagem.html';  // Redireciona para mensagem.html
}
