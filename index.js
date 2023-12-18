const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoute");
const channelRoutes = require("./routes/channelRoute");

const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth/", authRoutes);
app.use("/api/channel/", channelRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
