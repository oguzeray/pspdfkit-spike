import { useEffect, useRef } from 'react'
import PSPDFKit, { Instance } from 'pspdfkit'

interface PdfViewerComponentProps {
  document: string | ArrayBuffer
}

export default function PdfViewerComponent({
  document,
}: PdfViewerComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pdfkitInstance = useRef<Instance | null>(null)

  useEffect(() => {
    const container = containerRef.current
    ;(async function () {
      if (!container) {
        return
      }

      pdfkitInstance.current = await PSPDFKit.load({
        container: container,
        documentId: 'bb16e661-4c93-428b-8b18-281c4aa04c05',
        authPayload: {
          jwt: 'eyJhbGciOiJSUzI1NiJ9.eyJkb2N1bWVudF9pZCI6ImJiMTZlNjYxLTRjOTMtNDI4Yi04YjE4LTI4MWM0YWEwNGMwNSIsInBlcm1pc3Npb25zIjpbInJlYWQtZG9jdW1lbnQiLCJ3cml0ZSIsImRvd25sb2FkIl0sImV4cCI6MTY0MTc4MTMzMn0.R1myIXqcaiHm5PRS0um86eZPwnbuaUmKv3JGKaMff50scrihm-sy5nXD4uIXJJNynUi5jclHoI5UwTTYFHPlIk9RSNoShxMdiJqF48z9K8mgYzlgno3zPdqJMCpmTEuaxtfGcXkYYMD-ceIV8XNC7ceiMHFo5Legz6FZAe-3-XRMdwCi-hjhY_f2_40NworsIqQ0fB9AeSpX-bdHbevB6zQF13xSRJoIQJL1PhV5aycib75c_4hjb6JIjnYiGwzuCBx9vqUowS8BDQI1n4Vp9OY1vxlZmv5gpALzDILRWy7SR7W8XLD-VhpFhY98OA60nCa84m2lDuqjVWslU8A_Yg',
        },
        serverUrl: 'http://localhost:5000/',
        // document: document,
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
  }, [document])

  async function getAnnotations() {
    const ann = await pdfkitInstance.current?.getAnnotations(0)
    console.log(`annotationget: ${ann}`)
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div
        id="pspdfkit"
        ref={containerRef}
        style={{ width: '90%', height: '100vh' }}
      />

      <div style={{ width: '10%' }}>
        <button onClick={() => getAnnotations()}>Get Annotations</button>
      </div>
    </div>
  )
}
