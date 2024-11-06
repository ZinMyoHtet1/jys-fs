import mongoose from "mongoose";

class Server {
  #isConnected = false;

  constructor() {
    console.log("Thank you for using my library");
  }

  async connect() {
    if (this.#isConnected) {
      console.log("Already connected to the database.");
      return;
    }
    this.#isConnected = true;
  }

  disconnect() {
    this.#isConnected = false;
  }

  async connectMongoose(url) {
    try {
      return await mongoose.connect(url).then((res) => res);
    } catch (error) {
      throw error;
    }
  }

  addModel(name, schema) {
    const newSchema = new mongoose.Schema(schema, { timestamps: true });
    return mongoose.model(name, newSchema);
  }
}
export default Server;
