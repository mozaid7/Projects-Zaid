const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json()); // Ensure JSON payloads are parsed

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
 