// فایل: api/status.js
let statusData = '😍' // متغیر ساده برای نگهداری اطلاعات در حافظه

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    return res.status(200).json({ status: statusData })
  }

  if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      try {
        const data = JSON.parse(body)
        statusData = data.status || '😍'
        return res.status(200).json({ success: true, status: statusData })
      } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON' })
      }
    })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
