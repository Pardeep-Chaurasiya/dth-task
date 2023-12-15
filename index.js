const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoute");

const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth/", authRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
