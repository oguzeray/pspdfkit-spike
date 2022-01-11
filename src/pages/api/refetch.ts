import { NextApiRequest, NextApiResponse } from 'next'
import PspdfkitApi from 'src/Api/Pspdfkit.api'
import FormData from 'form-data'
import axios from 'axios'

export default async function refetch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const documentId = req.query.documentId as string

  if (!documentId || typeof documentId !== 'string') {
    res.status(400).json({ error: 'documentId is missing' })
    return
  }
  try {
    const { data: JsonFile } = await PspdfkitApi.getDocumentInstantJson(
      documentId
    )
    const { data: DocProperties } = await PspdfkitApi.fetchDocumentProperties(
      documentId
    )
    if (!DocProperties.data?.storage?.url) {
      throw new Error('No storage url')
    }

    await PspdfkitApi.deleteDocument(documentId)
    await PspdfkitApi.uploadDocument({
      url: DocProperties.data.storage.url,
      document_id: documentId,
      copy_asset_to_storage_backend: false,
      title: DocProperties.data?.title || undefined,
    })

    const formData = new FormData()
    formData.append('instant.json', Buffer.from(JSON.stringify(JsonFile)), {
      contentType: 'application/json',
      filename: 'instant.json',
    })

    await axios.post(
      `http://localhost:5000/api/documents/${documentId}/apply_instant_json`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Token token=secret`,
        },
      }
    )

    res.status(200).json({ succeed: true, error: null })
    return
  } catch (error) {
    console.log(error)
    res.status(204).json({ succeed: false, error })
    return
  }
}
