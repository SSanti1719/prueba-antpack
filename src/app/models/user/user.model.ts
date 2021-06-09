import { AdressModel } from "./adress.model";
export interface UserModel{
    id: number,
    name: string,
    username: string,
    email: string,
    adress:AdressModel
}