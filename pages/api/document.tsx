import { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import * as fs from 'fs'
import jwt from 'jsonwebtoken'

const jwtKey = fs.readFileSync(
  path.resolve(process.cwd(), 'config/private.pem')
)
export default function GetDocumentCredentials(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const documentId = req.query.documentId as string

  if (!documentId || typeof documentId !== 'string') {
    res.status(400).json({ error: 'documentId is missing' })
    return
  }

  function prepareJwt() {
    const claims = {
      document_id: documentId,
      permissions: ['read-document', 'write', 'download'],
    }

    return jwt.sign(claims, jwtKey, {
      algorithm: 'RS256',
      expiresIn: 3 * 24 * 60 * 60, // 3 days
    })
  }
  const token = prepareJwt()

  res.json({ token })
}
