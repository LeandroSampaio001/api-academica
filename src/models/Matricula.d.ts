import { Model, Optional, Association } from 'sequelize';
import { Aluno } from './Aluno';
import { Curso } from './Curso';
interface MatriculaAttributes {
    id: number;
    alunoId: number;
    cursoId: number;
    dataMatricula: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
interface MatriculaCreationAttributes extends Optional<MatriculaAttributes, 'id'> {
}
export declare class Matricula extends Model<MatriculaAttributes, MatriculaCreationAttributes> implements MatriculaAttributes {
    id: number;
    alunoId: number;
    cursoId: number;
    dataMatricula: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    Aluno?: Aluno;
    Curso?: Curso;
    static associations: {
        Aluno: Association<Matricula, Aluno>;
        Curso: Association<Matricula, Curso>;
    };
    static associate(models: {
        Aluno: typeof Aluno;
        Curso: typeof Curso;
        Matricula: typeof Matricula;
    }): void;
}
export {};
