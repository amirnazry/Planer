export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ mood: '😍' });
  }

  if (req.method === 'POST') {
    // فرض کنیم یه وضعیت جدید بگیری
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const data = JSON.parse(body);
      return res.status(200).json({ received: data });
    });
  }
}
