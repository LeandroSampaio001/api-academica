# 🎓 API de Gestão Acadêmica

Bem-vindo ao repositório da API de Gestão Acadêmica! Este projeto é uma **API RESTful** desenvolvida para simular o back-end de uma instituição de ensino. 

A aplicação foi projetada para gerenciar alunos, cursos e matrículas, garantindo que a regra de negócios de "muitos-para-muitos" (onde um aluno pode estar em vários cursos e um curso pode ter vários alunos) funcione de forma robusta, segura e escalável.

## 🚀 Tecnologias e Ferramentas
* **Node.js & TypeScript:** Base da aplicação, garantindo tipagem estática, código limpo e prevenção de erros em tempo de desenvolvimento.
* **Express.js:** Framework utilizado para a criação ágil e estruturada das rotas (endpoints) da API.
* **Sequelize ORM:** Ferramenta que traduz a lógica da aplicação para comandos de banco de dados, facilitando a manutenção e a troca de bancos no futuro.
* **SQLite:** Banco de dados relacional leve e embutido, ideal para facilitar testes locais sem a necessidade de instalações complexas.

## ⚙️ O que o sistema faz? (Funcionalidades)
Em vez de focar apenas em código, este sistema resolve problemas reais de gestão:
* **Gestão de Alunos:** Criação, leitura, atualização e exclusão (CRUD) de cadastros.
* **Gestão de Cursos:** Controle completo do catálogo de cursos (nome, carga horária, modalidade).
* **Sistema de Matrículas Inteligente (N:N):** 
  * Permite matricular alunos em cursos de forma dinâmica.
  * Gera relatórios cruzados: Lista todos os cursos de um aluno específico ou lista todos os alunos matriculados em uma turma.

---

## 🛠️ Passo a Passo: Como Rodar na Sua Máquina

Se você é um recrutador ou desenvolvedor querendo testar a aplicação localmente, preparei este guia simplificado. Você só precisará ter o **[Node.js](https://nodejs.org/)** instalado no seu computador.

**1. Baixe o projeto**  
Abra o seu terminal e digite o comando abaixo para clonar este repositório:
`git clone https://github.com/LeandroSampaio001/api-academica.git`

**2. Acesse a pasta do projeto**  
`cd api-academica`

**3. Instale as dependências**  
Este comando fará o download de todas as bibliotecas necessárias para o projeto rodar (como o Express e o TypeScript):  
`npm install`

**4. Prepare o Banco de Dados**  
Não é necessário configurar um banco pesado na sua máquina. O comando abaixo usa as migrations do Sequelize para criar as tabelas automaticamente no arquivo SQLite:  
`npx sequelize-cli db:migrate`

**5. Ligue o Servidor!**  
Agora é só iniciar a aplicação. O sistema vai avisar no terminal que está online e escutando as requisições.  
`npm run dev`

---

## 🧪 Como Testar a API na Prática

Como este é um projeto focado em Back-end (sem interface gráfica), você pode interagir com o sistema utilizando ferramentas como **Postman**, **Insomnia** ou a extensão **Thunder Client** do VS Code.

**Exemplo de Requisição (Criar um Curso):**
* **Método:** `POST`
* **URL:** `http://localhost:3000/api/v1/cursos`
* **Corpo (JSON):**
  {
    "nome": "Desenvolvimento Frontend com React",
    "carga_horaria": 120,
    "modalidade": "EAD"
  }

**Resultado:** O servidor processará a regra de negócio e retornará um *Status 201 Created* com os dados salvos no banco. Você pode então usar um método `GET` na mesma URL para visualizar a lista atualizada de cursos.
