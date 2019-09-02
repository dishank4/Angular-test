import { MaxLengthValidator } from '@angular/forms';

export enum genedarEnum {
    'm'= 'male',
    'f'= 'female'
}

export enum Role {
    'Admin' = 'admin',
    'Manager' = 'manager',
    'User' = 'user'
}

export interface UserModel {
    email: string;
    password: string;
    gender: genedarEnum;
    role: Role ;
}