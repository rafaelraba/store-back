import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class InventariosModelo {

    @PrimaryGeneratedColumn()
    Inventario_id:number;

    @Column()
    descripcion:Date;

    @Column()
    cod_Producto:string;

    @Column()
    cantidad_Ingreso:string;

    @Column()
    fecha_Ingeso:number;

    @Column()
    cantidad_Salida:string;

    @Column()
    fecha_Salida:string;

    @Column()
    employee_id:number;

}
