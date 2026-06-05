const botao = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

const frases = [
    "🌱 Cada atitude sustentável faz diferença!",
        "♻️ O planeta agradece quando você recicla.",
            "🌳 Plantar uma árvore é investir no futuro.",
                "💧 Economizar água é proteger a vida.",
                    "☀️ Os jovens são a energia da transformação ambiental."
                    ];

                    botao.addEventListener("click", () => {
                        const aleatoria = frases[Math.floor(Math.random() * frases.length)];
                            mensagem.textContent = aleatoria;
                            });