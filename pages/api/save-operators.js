import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data", "operators.json");
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.status(200).json({ message: "Operators saved" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}