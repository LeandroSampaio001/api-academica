import { Request, Response } from 'express';
import { Curso, Aluno } from '../models/index.js';

class CursoController {
    // POST /cursos - Criar um novo curso (Requisito Slide 4: nome, carga_horaria, modalidade)
    async store(req: Request, res: Response): Promise<Response> {
        const { nome, carga_horaria, modalidade } = req.body;
        try {
            const novoCurso = await Curso.create({ nome, carga_horaria, modalidade });
            return res.status(201).json(novoCurso);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao criar curso', details: error.message });
        }
    }

    // GET /cursos - Listar todos os cursos
    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const cursos = await Curso.findAll();
            return res.status(200).json(cursos);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao listar cursos', details: error.message });
        }
    }

    // GET /cursos/:id - Detalhar um curso específico
    async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            return res.status(200).json(curso);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao buscar curso', details: error.message });
        }
    }

    // PUT /cursos/:id - Atualizar dados de um curso
    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome, carga_horaria, modalidade } = req.body;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            await curso.update({ nome, carga_horaria, modalidade });
            return res.status(200).json(curso);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao atualizar curso', details: error.message });
        }
    }

    // DELETE /cursos/:id - Remover um curso
    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            await curso.destroy();
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao deletar curso', details: error.message });
        }
    }

    /**
     * REQUISITO SLIDE 6: Lista todos os alunos matriculados no curso :id
     * GET /cursos/:id/alunos
     */
    async getAlunos(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id, {
                include: [{
                    model: Aluno,
                    as: 'alunos',
                    through: { attributes: [] } // Oculta dados da tabela de junção no JSON
                }]
            });

            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }

            // @ts-ignore
            return res.status(200).json(curso.alunos);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao buscar alunos do curso', details: error.message });
        }
    }
}

export default new CursoController();