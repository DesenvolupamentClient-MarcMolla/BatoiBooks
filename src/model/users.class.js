import User from "./user.class";
export default class Users {
    constructor() {
        this.data = [];
    }

    populate(data) {
        this.data = data.map(item =>new User(item.id, item.nick, item.email, item.password));
    }

    addUser(user) {
        const lastId = this.data.reduce((maxId, user) => Math.max(maxId, user.id), 0);
        user.id = lastId + 1;
        user = new User(user.id, user.nick, user.email, user.password)
        this.data.push(user);
        return user;
    }

    removeUser(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index === -1) throw new Error('User not found');
        this.data.splice(index, 1);
    }

    changeUser(user) {
        user = new User(user.id, user.nick, user.email, user.password);
        const index = this.data.findIndex(item => item.id === user.id);
        if (index === -1) throw new Error('User not found');
        this.data[index] = user;
        return user;
    }

    toString() {
        return this.data.map(item => item.toString()).join('\n');
    }


    getUserById(userId) {
        const result = this.data.find((user) => user.id === userId);
        if (result) {
        return new User(result.id, result.nick, result.email, result.password);
        }
        throw new Error('No se encontró el usuario');
    }

    getUserIndexById( userId) {
        const result = this.data.findIndex((user) => user.id === userId);
        if (result !== -1) {
            return result;
        }
        throw new Error('No se encontró el índice del usuario');
    }

    getUserByNickName( nick) {
        const result = this.data.find((user) => user.nick === nick);
        if (result) {
        return result;
        }
        throw new Error('No se encontró el usuario con el nick especificado');
    }

}