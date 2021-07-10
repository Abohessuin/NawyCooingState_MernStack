import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";

//variables
const app = express();
const CONNECTION_URL =
  "mongodb+srv://CooingState:123@cluster0.jqygs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Port = process.env.PORT || 5000;
//App uses
app.use(bodyParser.json({ Limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ Limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.get("/",(req,res) => {
  res.send('hello')
})


// Database and server listening connection setup
mongoose.set("useFindAndModify", false);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(Port, () => console.log(`Server listening on port${Port}`))
  )
  .catch((err) => console.error(err));
