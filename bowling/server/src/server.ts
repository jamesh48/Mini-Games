import path from "path";
import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use("*", (req: Request, _res: Response, next: NextFunction) => {
  console.log(req.method, req.originalUrl);
  console.log(path.resolve());
  next();
});
app.use(express.static(path.resolve("client/public")));

const port = 3003;

app.listen(port, () => {
  console.log(`Bowling App listening on port ${port}`);
});
