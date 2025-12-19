import { Request, Response } from 'express';
// Importamos o Model Aluno (lembre-se do .js no final para o NodeNext)
import { Aluno } from '../models/Aluno.js'; 

class AlunoController {

    // Listar todos os alunos
    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const alunos = await Aluno.findAll();
            return res.status(200).json(alunos);
        } catch (error: any) {
            console.error('Erro ao listar alunos:', error.message);
            return res.status(500).json({ error: 'Erro ao listar alunos', details: error.message });
        }
    }

    // Criar novo aluno
    async store(req: Request, res: Response): Promise<Response> {
        const { nome, idade, cpf } = req.body;
        try {
            // Tenta criar o aluno no banco
            const novoAluno = await Aluno.create({ nome, idade, cpf });
            return res.status(201).json(novoAluno);
        } catch (error: any) {
            // Log detalhado no terminal do VS Code
            console.error("ERRO DETALHADO NO SEQUELIZE:", error);
            
            // Resposta detalhada para o Thunder Client
            return res.status(500).json({ 
                error: 'Erro ao criar aluno', 
                message: error.message,
                sqlError: error.parent?.message || "Sem detalhes adicionais"
            });
        }
    }

    // Buscar um aluno específico pelo ID
    async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findByPk(id);
            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }
            return res.status(200).json(aluno);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao buscar aluno', details: error.message });
        }
    }

    // Atualizar dados de um aluno
    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome, idade, cpf } = req.body;
        try {
            const aluno = await Aluno.findByPk(id);
            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }
            await aluno.update({ nome, idade, cpf });
            return res.status(200).json(aluno);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao atualizar aluno', details: error.message });
        }
    }

    // Deletar um aluno
    async destroy(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findByPk(id);
            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }
            await aluno.destroy();
            return res.status(204).send(); // Sucesso sem conteúdo
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao deletar aluno', details: error.message });
        }
    }
}

// Exportamos uma instância da classe
export default new AlunoController();