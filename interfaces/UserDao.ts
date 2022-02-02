import User from "../models/User";

export default interface UserDao {
    findAllUsers(): Promise<User[]>;
    findUserById(userId: string): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(userId: string, user: User): Promise<any>;
    deleteUser(userId: string): Promise<any>;
}
