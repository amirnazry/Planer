import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { id } = req.query
  const filePath = path.join(process.cwd(), 'data', 'db.json')
  const fileData = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileData)

  // اگر متد GET باشه
  if (req.method === 'GET') {
    const project = data.projects.find(p => p.id === id)
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({ error: 'پروژه پیدا نشد' })
    }
  }

  // اگر متد PATCH باشه (ویرایش)
  else if (req.method === 'PATCH') {
    const index = data.projects.findIndex(p => p.id === id)
    if (index !== -1) {
      const body = req.body || {}
      data.projects[index] = { ...data.projects[index], ...body }
      // چون Vercel اجازه نوشتن در فایل رو نمی‌ده، فقط شبیه‌سازی می‌کنیم:
      res.status(200).json(data.projects[index])
    } else {
      res.status(404).json({ error: 'پروژه پیدا نشد' })
    }
  }

  // بقیه متدها رد می‌شن
  else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
