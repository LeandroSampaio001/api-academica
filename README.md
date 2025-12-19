# 🎓 API de Gestão Acadêmica

Este projeto é uma API REST para gestão de uma escola técnica, desenvolvida como atividade final do módulo de Node.js. A aplicação permite o gerenciamento de alunos, cursos e matrículas, utilizando um relacionamento de muitos-para-muitos (N:N).

## 🚀 Tecnologias Utilizadas
* **Node.js** & **TypeScript**
* **Express.js** (Framework Web)
* **Sequelize ORM** (Manipulação do Banco de Dados)
* **SQLite** (Banco de Dados em arquivo)

## 📌 Requisitos Atendidos (conforme Slides da Aula 38)
- [x] Implementação de relacionamento Muitos-para-Muitos (N:N).
- [x] Modelagem de Aluno (nome, email), Curso (nome, carga_horaria, modalidade) e Matricula.
- [x] CRUD completo para Alunos e Cursos.
- [x] Endpoint para listar cursos de um aluno específico.
- [x] Endpoint para listar alunos matriculados em um curso específico.

## 🛠️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/LeandroSampaio001/api-academica.git](https://github.com/LeandroSampaio001/api-academica.git)