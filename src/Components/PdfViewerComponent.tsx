import { useEffect, useRef } from 'react'
import PSPDFKit, { Instance } from 'pspdfkit'

interface PdfViewerComponentProps {
  documentId: string
}

export default function PdfViewerComponent({
  documentId,
}: PdfViewerComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pdfkitInstance = useRef<Instance | null>(null)

  useEffect(() => {
    const container = containerRef.current
    ;(async function () {
      if (!container) {
        return
      }

      const token = await fetch(`/api/document?documentId=${documentId}`)
      const { token: pdfkitToken } = await token.json()

      pdfkitInstance.current = await PSPDFKit.load({
        container: container,
        documentId,
        authPayload: {
          jwt: pdfkitToken,
        },
        serverUrl: 'http://localhost:5000/',
        autoSaveMode: 'INTELLIGENT',
        XFDFKeepCurrentAnnotations: true,
        locale: 'de',
        enableAutomaticLinkExtraction: true,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        instant: true,
      })
    })()

    return () => {
      PSPDFKit.unload(container)
    }
  }, [documentId])

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div
        id="pspdfkit"
        ref={containerRef}
        style={{ width: '90%', height: '100vh' }}
      />
    </div>
  )
}
