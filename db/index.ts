import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function connectToDatabase(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Database is successfully connected");
  } catch (error) {
    console.error("Database connection failed: ", error);
    process.exit(1);
  }
}
