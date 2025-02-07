"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const util_1 = require("../../helpers/util");
const api_query_params_1 = require("api-query-params");
const mongoose_3 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.isEmailExist = async (email) => {
            const user = await this.userModel.exists({ email });
            if (user)
                return true;
            return false;
        };
    }
    async create(createUserDto) {
        const { name, email, password, phone, address, image } = createUserDto;
        const isExist = await this.isEmailExist(email);
        if (isExist) {
            throw new common_1.BadRequestException(`Email đã tồn tại: ${email}`);
        }
        const hashPassword = await (0, util_1.hashPasswordHelper)(password);
        const user = await this.userModel.create({
            name, email, hashPassword, phone, address, image
        });
        return {
            _id: user._id
        };
    }
    async findAll(query, current, pageSize) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        if (!current)
            current = 1;
        if (!pageSize)
            pageSize = 10;
        const totalItems = (await this.userModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (+current - 1) * (+pageSize);
        const results = await this.userModel.find(filter).limit(pageSize).skip(skip).sort(sort).select("-password");
        return { results, totalPages };
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async update(updateUserDto) {
        return await this.userModel.updateOne({ _id: updateUserDto._id }, { ...updateUserDto });
    }
    async remove(_id) {
        if (mongoose_3.default.isValidObjectId(_id)) {
            return this.userModel.deleteOne({ _id });
        }
        else {
            throw new common_1.BadRequestException("Id không đúng định dạng MogoDB");
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map