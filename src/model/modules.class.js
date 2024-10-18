import Module from "./module.class";
export default class Modules {
  constructor() {
    this.data = [];
  }

  populate(data) {
    this.data = data.map(
      (item) =>
        new Module(item.code, item.cliteral, item.vliteral, item.courseId),
    );
  }

  addModule(module) {
    const lastId = this.data.reduce(
      (maxId, module) => Math.max(maxId, module.code),
      0,
    );
    module.code = lastId + 1;
    module = new Module(
      module.code,
      module.cliteral,
      module.vliteral,
      module.courseId,
    );
    this.data.push(module);
    return module;
  }

  removeModule(id) {
    const index = this.data.findIndex((item) => item.code === id);
    if (index === -1) throw new Error("Module not found");
    this.data.splice(index, 1);
  }

  changeModule(module) {
    module = new Module(
      module.code,
      module.cliteral,
      module.vliteral,
      module.courseId,
    );
    const index = this.data.findIndex((item) => item.code === module.code);
    if (index === -1) throw new Error("Module not found");
    this.data[index] = module;
    return module;
  }

  toString() {
    return this.data.map((item) => item.toString()).join("\n");
  }

  getModuleByCode(moduleCode) {
    const result = this.data.find((module) => module.code === moduleCode);
    if (result) {
      return new Module(
        result.code,
        result.cliteral,
        result.vliteral,
        result.courseId,
      );
    }
    throw new Error("No se encontró el usuario");
  }
}
