export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // برای رفع خطای CORS
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // برای پیش‌درخواست CORS
  }

  // پاسخ اصلی
  res.status(200).json({ message: 'status ok' });
}
