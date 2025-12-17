import { Model, Optional, Association } from 'sequelize';
import { Matricula } from './Matricula';
interface CursoAttributes {
    id: number;
    nome: string;
    cargaHoraria: number;
    modalidade: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface CursoCreationAttributes extends Optional<CursoAttributes, 'id'> {
}
export declare class Curso extends Model<CursoAttributes, CursoCreationAttributes> implements CursoAttributes {
    id: number;
    nome: string;
    cargaHoraria: number;
    modalidade: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    static associations: {
        matriculas: Association<Curso, Matricula>;
    };
}
export {};
