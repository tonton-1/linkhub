        export default function handler(req, res) {
  const pass = process.env.CORRECT_PASSWORD;
  res.status(200).json({ pass });
}
       