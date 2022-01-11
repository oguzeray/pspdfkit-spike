import { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import * as fs from 'fs'
import jwt from 'jsonwebtoken'

/*
Annotation permissions:
User 1: Can see, edit, delete, and add annotations
User 2: Can see ALL annotations AND can edit, delete, SELF ANNOTATIONS AND ADD ANNOTATIONS
User 3: Can see ALL annotations BUT can't edit, delete, Add annotations
User 4: Cant see ANY annotations.
User 5: Cant Download or Print
*/
const jwtKey = fs.readFileSync(
  path.resolve(process.cwd(), 'src/config/private.pem')
)
export default async function GetTokenByDocumentId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const documentId = req.query.documentId
  const userId = req.query.userId
  const hasDocumentId = typeof documentId === 'string' && documentId.length > 0
  const hasUserId = typeof userId === 'string' && userId.length > 0

  if (!hasDocumentId || !hasUserId) {
    res.status(400).json({ error: 'documentId or userId is missing' })
    return
  }

  function getCollaborationPermissions(userId: string) {
    switch (userId) {
      case '1':
        return [
          'annotations:view:all',
          'annotations:edit:all',
          'annotations:delete:all',
        ]
      case '2':
        return [
          'annotations:view:all',
          'annotations:edit:self',
          'annotations:delete:self',
        ]
      case '3':
        return ['annotations:view:all']
      case '4':
        return ['annotations:view:self']
      case '5':
        return []
      case '6':
        return []
      default:
        return []
    }
  }
  function getPermissions(userId: string) {
    switch (userId) {
      case '3':
        return ['read-document', 'download']
      case '4':
        return ['read-document', 'download']
      case '5':
        return ['read-document']
      case '6':
        return []
      default:
        return ['read-document', 'write', 'download']
    }
  }
  function prepareJwt() {
    const claims = {
      user_id: userId,
      collaboration_permissions: getCollaborationPermissions(userId as string),
      creator_name: `User ${userId}`,
      document_id: documentId,
      permissions: getPermissions(userId as string),
    }

    return jwt.sign(claims, jwtKey, {
      algorithm: 'RS256',
      expiresIn: 3 * 24 * 60 * 60, // 3 days
    })
  }
  const token = prepareJwt()

  res.status(200).json({ token })
}
