const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017"; // Replace with your MongoDB server URL

// Database Name
const dbName = "your_database_name"; // Replace with your database name

// Function to connect to the MongoDB server
async function connectToMongoDB() {
  try {
    // Create a new MongoClient
    const client = new MongoClient(url, {
      useUnifiedTopology: true,
    });

    // Connect to the MongoDB server
    await client.connect();

    console.log("Connected successfully to the MongoDB server");

    // Access a specific database
    const db = client.db(dbName);

    // Perform any operations you need here (e.g., CRUD operations)

    // Close the connection to the server
    await client.close();
    console.log("Connection to MongoDB closed");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();