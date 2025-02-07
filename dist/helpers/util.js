"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPasswordHelper = void 0;
const console_1 = require("console");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashPasswordHelper = async (plainPassword) => {
    try {
        return await bcrypt.hash(plainPassword, saltRounds);
    }
    catch {
        console.log(console_1.error);
    }
};
exports.hashPasswordHelper = hashPasswordHelper;
//# sourceMappingURL=util.js.map