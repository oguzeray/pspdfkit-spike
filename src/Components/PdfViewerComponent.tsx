import { useCallback, useEffect, useRef } from 'react'
import PSPDFKit, { Instance } from 'pspdfkit'

interface PdfViewerComponentProps {
  documentId: string
}
export default function PdfViewerComponent({
  documentId,
}: PdfViewerComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pdfkitInstance = useRef<Instance | null>(null)

  // // @ts-ignore
  // const toolbarItems = PSPDFKit.defaultToolbarItems
  //   .concat({
  //     type: 'comment',
  //   })
  //   .filter((item) => item.type !== 'arrow') // Add comment tool.

  useEffect(() => {
    const container = containerRef.current
    ;(async function () {
      if (!container) {
        return
      }

      const token = await fetch(`/api/gettoken?documentId=${documentId}`)
      const { token: pdfkitToken } = await token.json()

      pdfkitInstance.current = await PSPDFKit.load({
        container: container,
        documentId,
        initialViewState: new PSPDFKit.ViewState({
          formDesignMode: true,
        }),
        authPayload: {
          jwt: pdfkitToken,
        },
        serverUrl: 'http://localhost:5000/',
        autoSaveMode: 'IMMEDIATE',
        locale: 'en',
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        instant: true,
      })
    })()

    return () => {
      PSPDFKit.unload(container)
    }
  }, [documentId])

  pdfkitInstance.current?.setViewState((viewState) =>
    viewState.set('formDesignMode', true)
  )
  const widget = new PSPDFKit.Annotations.WidgetAnnotation({
    id: PSPDFKit.generateInstantId(),
    pageIndex: 0,
    formFieldName: 'MyFormField',
    boundingBox: new PSPDFKit.Geometry.Rect({
      left: 100,
      top: 75,
      width: 200,
      height: 80,
    }),
  })

  const formField = new PSPDFKit.FormFields.TextFormField({
    name: 'MyFormField',
    value: 'Text shown in the form field',
  })

  pdfkitInstance.current?.create([widget, formField])

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  )
}
