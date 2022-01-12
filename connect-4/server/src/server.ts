import path from "path";
import express from "express";
const app = express();
console.log(path.resolve(__dirname, "../../client/public"));
app.use(express.static(path.resolve(__dirname, "../../client/public")));
const port = 4000;
app.listen(port, () => {
  console.log(`Connect-4 listening on port ${port}`);
});
