import express from "express";
// before adding graphql API
import graphqlHTTP from "express-graphql";
// after adding graphql api
import mongoose from "mongoose";

//Later
import schema from "./graphql";
const app = express();

// mongoose.connect("mongodb://localhost:27017");
// const db = mongoose.connection;
// db.on("error", () => console.log("Failed to connect to DB.")).once("open", () =>
//   console.log("Connected to DB. ")
// );

mongoose
  // .connect(process.env.CONNECTION_STRING, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   dbName: "mean-eshop",
  // })
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "graphqlpro",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World..");
});

// GraphQL API
app.use(
  "/graphql",
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true,
  }))
);

app.listen(3000, () => {
  console.log("GraphQL server running at port 3000...");
});
