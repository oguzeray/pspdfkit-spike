import { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import * as fs from 'fs'
import jwt from 'jsonwebtoken'

const jwtKey = fs.readFileSync(
  path.resolve(process.cwd(), 'config/private.pem')
)
export default function GetTokenByDocumentId(
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
      user_id: 'user 1',
      layer: 'annotations',
      collaboration_permissions: [
        'annotations:view:all',
        'annotations:edit:self',
        'annotations:delete:self',
        'comments:view:all',
        'comments:edit:self',
        'comments:delete:self',
      ],
      creator_name: 'John Doe',
      document_id: documentId,
      permissions: ['read-document', 'write', 'download'],
    }

    return jwt.sign(claims, jwtKey, {
      algorithm: 'RS256',
      expiresIn: 3 * 24 * 60 * 60, // 3 days
    })
  }
  const token = prepareJwt()

  res.status(200).json({ token })
}
