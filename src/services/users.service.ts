import { Repository } from "typeorm/repository/Repository";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UsersService {

    private userRepo:Repository<User>
    
    constructor() {
        this.userRepo = AppDataSource.getRepository(User)
    }

    public async getAllUsers(): Promise<User[]> {
        const users = await this.userRepo.find()
        return users
    }

    public async create(attr: Partial<User>): Promise<User> {
        const newUser = { active: true, ...attr }
        const user = await this.userRepo.save(newUser)
        return user
    }

    public async delete(userId: number): Promise<boolean> {
        const result = await this.userRepo.delete({ id: userId })
        return result.affected > 0
    }
}