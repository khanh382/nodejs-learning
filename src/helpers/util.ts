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