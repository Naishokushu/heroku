import { Module } from './module.model';


export class Sujet {
    public name: string;
    public img: string;
    public modules: Module[];

    // deserialize(input: any): this {
    //     Object.assign(this, input);
    //     return this;
    // }
}
