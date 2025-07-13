import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { id } = req.query
  const filePath = path.join(process.cwd(), 'data', 'db.json')

  const fileData = fs.readFileSync(filePath, 'utf-8')
  const json = JSON.parse(fileData)

  if (req.method === 'GET') {
    const project = json.projects.find(p => p.id === id)
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  }

  else if (req.method === 'PATCH') {
    const index = json.projects.findIndex(p => p.id === id)
    if (index !== -1) {
      const updated = { ...json.projects[index], ...req.body }
      json.projects[index] = updated
      // شبیه‌سازی ذخیره چون Vercel اجازه write نداره
      res.status(200).json(updated)
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  }

  else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
