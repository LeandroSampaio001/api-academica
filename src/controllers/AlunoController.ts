import { Request, Response } from 'express';
import { Aluno, Curso } from '../models/index.js';

class AlunoController {
    // POST /alunos - Criar um aluno
    async store(req: Request, res: Response): Promise<Response> {
        const { nome, email } = req.body;
        try {
            const novoAluno = await Aluno.create({ nome, email });
            return res.status(201).json(novoAluno);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao criar aluno', details: error.message });
        }
    }

    // GET /alunos - Listar todos os alunos
    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const alunos = await Aluno.findAll();
            return res.status(200).json(alunos);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao listar alunos', details: error.message });
        }
    }

    // GET /alunos/:id - Visualizar um aluno específico
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

    // PUT /alunos/:id - Atualizar um aluno
    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome, email } = req.body;
        try {
            const aluno = await Aluno.findByPk(id);
            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }
            await aluno.update({ nome, email });
            return res.status(200).json(aluno);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao atualizar aluno', details: error.message });
        }
    }

    // DELETE /alunos/:id - Deletar um aluno
    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findByPk(id);
            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }
            await aluno.destroy();
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao deletar aluno', details: error.message });
        }
    }

    /**
     * REQUISITO SLIDE 6: Listar cursos de um aluno específico
     * GET /alunos/:id/cursos
     */
    async getCursos(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findByPk(id, {
                include: [{
                    model: Curso,
                    as: 'cursos',
                    through: { attributes: [] } // Remove os dados da tabela intermediária do retorno
                }]
            });

            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }

            // @ts-ignore
            return res.status(200).json(aluno.cursos);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao buscar cursos do aluno', details: error.message });
        }
    }
}

export default new AlunoController();