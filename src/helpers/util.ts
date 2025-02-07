import { error } from 'console';

const bcrypt = require('bcrypt');
const saltRounds = 10;


export const hashPasswordHelper = async (plainPassword: string) => {
    try {
        return await bcrypt.hash(plainPassword, saltRounds);
    } catch {
        console.log(error)
    }
}

export const comparePasswordHelper = async (plainPassword: string, hashPassword: string) => {
    try {
        return await bcrypt.compare(plainPassword, hashPassword);
    } catch {
        console.log(error)
    }
}