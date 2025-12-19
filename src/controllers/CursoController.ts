import { Request, Response } from 'express';
import { Curso } from '../models/Curso.js';

class CursoController {

    // Listar todos os cursos
    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const cursos = await Curso.findAll();
            return res.status(200).json(cursos);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao listar cursos', details: error.message });
        }
    }

    // Criar novo curso
    async store(req: Request, res: Response): Promise<Response> {
        const { nome, descricao, carga_horaria } = req.body;
        try {
            const novoCurso = await Curso.create({ nome, descricao, carga_horaria });
            return res.status(201).json(novoCurso);
        } catch (error: any) {
            return res.status(500).json({ 
                error: 'Erro ao criar curso', 
                message: error.message 
            });
        }
    }

    // Buscar um curso específico
    async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            return res.status(200).json(curso);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao buscar curso' });
        }
    }

    // Atualizar curso
    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome, descricao, carga_horaria } = req.body;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            await curso.update({ nome, descricao, carga_horaria });
            return res.status(200).json(curso);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao atualizar curso' });
        }
    }

    // Deletar curso
    async destroy(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            await curso.destroy();
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao deletar curso' });
        }
    }
}

export default new CursoController();