import express from "express";
// before adding graphql API
import graphqlHTTP from "express-graphql";
// after adding graphql api
import mongoose from "mongoose";

//Later
import schema from "./graphql";
const app = express();

mongoose

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
