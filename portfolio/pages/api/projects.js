// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../services/database.mjs"

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const projects = await db.getProjects()
  res.status(200).json(projects)
}
