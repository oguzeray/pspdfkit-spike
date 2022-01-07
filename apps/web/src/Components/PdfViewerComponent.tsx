import { useEffect, useRef } from 'react'
import PSPDFKit, { Instance } from 'pspdfkit'

interface PdfViewerComponentProps {
  document: string | ArrayBuffer
}

export default function PdfViewerComponent({
  document,
}: PdfViewerComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pspdfkit = useRef<Instance | null>(null)

  useEffect(() => {
    ;(async function () {
      if (!containerRef.current) {
        return
      }

      pspdfkit.current = await PSPDFKit.load({
        container: containerRef.current,
        document,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        enableAutomaticLinkExtraction: true,
      })
    })()

    return () => {
      PSPDFKit.unload(containerRef.current)
    }
  }, [document, containerRef.current])

  async function annotationget() {
    const ann = await pspdfkit.current?.getAnnotations(0)
    console.log(`annotationget: ${ann}`)
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '90%', height: '100vh' }} />
      <div style={{ width: '10%' }}>
        <button onClick={() => annotationget()}>asdasdasda</button>
      </div>
    </div>
  )
}
