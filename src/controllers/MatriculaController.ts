import { Request, Response } from 'express';
import { Matricula, Aluno, Curso } from '../models/index.js';

class MatriculaController {
    /**
     * REQUISITO SLIDE 6: Cria uma matrícula (liga um aluno a um curso)
     * POST /matriculas
     * Corpo esperado: { "alunoId": 1, "cursoId": 3 }
     */
    async store(req: Request, res: Response): Promise<Response> {
        const { alunoId, cursoId } = req.body; // Nomes das chaves conforme Slide 6
        
        try {
            // Verifica se o aluno existe
            const aluno = await Aluno.findByPk(alunoId);
            if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });

            // Verifica se o curso existe
            const curso = await Curso.findByPk(cursoId);
            if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });

            // Cria a matrícula usando os nomes de coluna do banco (aluno_id / curso_id)
            const novaMatricula = await Matricula.create({ 
                aluno_id: alunoId, 
                curso_id: cursoId 
            });
            
            return res.status(201).json(novaMatricula);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao realizar matrícula', details: error.message });
        }
    }

    // GET /matriculas - Listar todas as matrículas com detalhes
    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const matriculas = await Matricula.findAll({
                include: [
                    { model: Aluno, as: 'aluno', attributes: ['nome', 'email'] },
                    { model: Curso, as: 'curso', attributes: ['nome', 'modalidade'] }
                ]
            });
            return res.status(200).json(matriculas);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao listar matrículas', details: error.message });
        }
    }

    /**
     * REQUISITO OPCIONAL SLIDE 6: Remove uma matrícula específica
     * DELETE /matriculas/:id
     */
    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const matricula = await Matricula.findByPk(id);
            if (!matricula) {
                return res.status(404).json({ error: 'Matrícula não encontrada' });
            }
            await matricula.destroy();
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro ao remover matrícula', details: error.message });
        }
    }
}

export default new MatriculaController();