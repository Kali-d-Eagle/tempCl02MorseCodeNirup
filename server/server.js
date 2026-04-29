import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// LOGIN ROUTE
app.post("/login", (req, res) => {
const { username, password } = req.body;

if (
username === process.env.USERNAME &&
password === process.env.PASSWORD
) {
return res.json({ success: true });
}

return res.status(401).json({ success: false });
});



// app.listen(3000, () => {
// console.log("🚀 Server running on http://localhost:3000");
// });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});
