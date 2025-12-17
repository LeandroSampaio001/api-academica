import { Model, Optional, Association } from 'sequelize';
import { Matricula } from './Matricula';
interface AlunoAttributes {
    id: number;
    nome: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface AlunoCreationAttributes extends Optional<AlunoAttributes, 'id'> {
}
export declare class Aluno extends Model<AlunoAttributes, AlunoCreationAttributes> implements AlunoAttributes {
    id: number;
    nome: string;
    email: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    static associations: {
        matriculas: Association<Aluno, Matricula>;
    };
}
export {};
