const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: [
            "Brasília",
            "Rio de Janeiro",
            "São Paulo",
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        respostas: [
            "Thomas Jefferson",
            "George Washington",
            "Abraham Lincoln",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        respostas: [
            "Vênus",
            "Júpiter",
            "Marte",
        ],
        correta: 1
    },
    {
        pergunta: "Quem escreveu 'Romeu e Julieta'?",
        respostas: [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
        ],
        correta: 1
    },
    {
        pergunta: "Quantos lados tem um triângulo?",
        respostas: [
            "Quatro",
            "Três",
            "Cinco",
        ],
        correta: 1
    },
    {
        pergunta: "Em que ano ocorreu a independência do Brasil?",
        respostas: [
            "1822",
            "1492",
            "1776",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o elemento mais abundante na crosta terrestre?",
        respostas: [
            "Oxigênio",
            "Ferro",
            "Silício",
        ],
        correta: 2
    },
    {
        pergunta: "Quem pintou a 'Mona Lisa'?",
        respostas: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a linguagem de programação mais usada em desenvolvimento web?",
        respostas: [
            "Java",
            "JavaScript",
            "Python",
        ],
        correta: 1
    },
    {
        pergunta: "Quantos planetas existem no sistema solar?",
        respostas: [
            "Oito",
            "Nove",
            "Dez",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas


for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

        for(let resposta of item.respostas){
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name','pergunta' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta
                    corretas.delete(item)
                    if(estaCorreta){
                        corretas.add(item)
                    }
                    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }

            quizItem.querySelector('dl').appendChild(dt)
        }

        quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}