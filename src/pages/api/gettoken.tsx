import { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import * as fs from 'fs'
import jwt from 'jsonwebtoken'
import pspdfkitApi from 'src/Api/Pspdfkit.api'

const jwtKey = fs.readFileSync(
  path.resolve(process.cwd(), 'src/config/private.pem')
)
export default async function GetTokenByDocumentId(
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
      user_id: 'user 2',
      collaboration_permissions: [
        'annotations:view:all',
        'annotations:edit:self',
        'annotations:delete:self',
        'form-fields:view:all',
        'form-fields:edit:all',
        'form-fields:delete:all',
        'form-fields:fill:all',
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

  try {
    const { data } = (await pspdfkitApi.fetchDocumentInfo(documentId))?.data
    console.log(`Document ${documentId} info:`, data)
  } catch (error) {
    console.log(`error: ${error}`)
  }

  res.status(200).json({ token })
}
