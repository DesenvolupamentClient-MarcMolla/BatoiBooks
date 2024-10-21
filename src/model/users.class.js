import User from "./user.class";
import api from "../services/users.api"

export default class Users {
  constructor() {
    this.data = [];
  }

  async populate() {
    try{
      const users = await api.getDBUsers();
      this.data = users.map(
        (item) => new User(item.id, item.nick, item.email, item.password),
      );
    }catch{
      console.log(error)
    }


    
  }

  addUser(user) {
    const lastId = this.data.reduce(
      (maxId, user) => Math.max(maxId, user.id),
      0,
    );
    user.id = lastId + 1;
    user = new User(user.id, user.nick, user.email, user.password);
    this.data.push(user);
    return user;
  }

  async removeUser(id) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("User not found");

    try{
      await api.removeDBUser(index)
    }catch(error){
      console.log(error)
    }


    this.data.splice(index, 1);
  }

  async changeUser(user) {
    user = new User(user.id, user.nick, user.email, user.password);
    const index = this.data.findIndex((item) => item.id === user.id);
    if (index === -1) throw new Error("User not found");

    try{
      await api.changeDBUser(user)
    }catch(error){
      console.log(error) 
    }

    this.data[index] = user;
    return user; 
  } 

  async changeUserPassword(id, password) {
    let user;
    try{
      user = await api.getDBUser(id)
      user = new User(id, user.nick, user.email, password);
    }catch(error){ 
      console.log(error)
    }

    
    const index = this.data.findIndex((item) => item.id === user.id);
    if (index === -1) throw new Error("User not found");


    try{
      await api.changeUserPassword(user.id, password)
    }catch(error){ 
      console.log(error)
    }

    this.data[index] = user;
    return user;
  }

  toString() {
    return this.data.map((item) => item.toString()).join("\n");
  }

  getUserById(userId) {
    const result = this.data.find((user) => user.id === userId);
    if (result) {
      return new User(result.id, result.nick, result.email, result.password);
    }
    throw new Error("No se encontró el usuario");
  }

  getUserIndexById(userId) {
    const result = this.data.findIndex((user) => user.id === userId);
    if (result !== -1) {
      return result;
    }
    throw new Error("No se encontró el índice del usuario");
  }

  getUserByNickName(nick) {
    const result = this.data.find((user) => user.nick === nick);
    if (result) {
      return result;
    }
    throw new Error("No se encontró el usuario con el nick especificado");
  }
}
