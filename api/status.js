export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ status: "ok", today: new Date().toLocaleDateString("fa-IR") });
  } 
  else if (req.method === 'POST') {
    // این قسمت شبیه‌سازی ذخیره هست (Vercel اجازه نوشتن نداره)
    res.status(200).json({ message: "Status saved successfully!" });
  } 
  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
