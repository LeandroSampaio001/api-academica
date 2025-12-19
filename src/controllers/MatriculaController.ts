import { Request, Response } from 'express';
// IMPORTANTE: Importamos os modelos do arquivo 'index.js' da pasta models
// É este arquivo index que roda o código de associação (belongsTo / hasMany)
import { Matricula, Aluno, Curso } from '../models/index.js';

class MatriculaController {
    
    // Criar nova matrícula
    async store(req: Request, res: Response): Promise<Response> {
        const { aluno_id, curso_id } = req.body;
        try {
            const novaMatricula = await Matricula.create({ aluno_id, curso_id });
            return res.status(201).json(novaMatricula);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao matricular', message: error.message });
        }
    }

    // Listar matrículas TURBINADAS (com nomes)
    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const matriculas = await Matricula.findAll({
                include: [
                    { 
                        model: Aluno, 
                        as: 'aluno', 
                        attributes: ['nome', 'cpf'] 
                    },
                    { 
                        model: Curso, 
                        as: 'curso', 
                        attributes: ['nome'] 
                    }
                ]
            });
            return res.status(200).json(matriculas);
        } catch (error: any) {
            console.error("ERRO NO FINDALL DE MATRICULA:", error);
            return res.status(500).json({ error: 'Erro ao listar matrículas', details: error.message });
        }
    }
}

export default new MatriculaController();