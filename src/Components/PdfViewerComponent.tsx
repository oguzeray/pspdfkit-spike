import { useEffect, useRef, useState } from 'react'
import PSPDFKit, { Instance } from 'pspdfkit'

interface PdfViewerComponentProps {
  documentId: string
}
export default function PdfViewerComponent({
  documentId,
}: PdfViewerComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const instance = useRef<Instance | null>(null)
  const [userId, setUserId] = useState<string>('1')

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
      try {
        const token = await fetch(
          `/api/gettoken?documentId=${documentId}&userId=${userId}`
        )
        const { token: pdfkitToken } = await token.json()

        instance.current = await PSPDFKit.load({
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
      } catch (error) {
        console.error(error)
      }
    })()

    return () => {
      PSPDFKit.unload(container)
    }
  }, [documentId, userId])

  // const addTextField = async () => {
  //   if (!instance.current) {
  //     return
  //   }

  //   const widget = new PSPDFKit.Annotations.WidgetAnnotation({
  //     id: PSPDFKit.generateInstantId(),
  //     pageIndex: 0,
  //     formFieldName: 'MyFormField',
  //     boundingBox: new PSPDFKit.Geometry.Rect({
  //       left: 100,
  //       top: 75,
  //       width: 200,
  //       height: 80,
  //     }),
  //   })

  //   const formField = new PSPDFKit.FormFields.TextFormField({
  //     name: 'MyFormField',
  //     label: 'My Form Field',
  //     isFillable: true,
  //     annotationIds: PSPDFKit.Immutable.List([widget.id]),
  //     value: 'Text shown in the form field',
  //   })

  //   await instance.current.create([widget, formField])
  // }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '90%', height: '100vh' }} />
      <div
        style={{
          width: '10%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ margin: 10 }}>
          <h1>Annotation permissions:</h1>
          <p>User 1: Can see, edit, delete, and add annotations</p>
          <p>
            User 2: Can see ALL annotations AND can edit, delete, SELF
            ANNOTATIONS AND ADD ANNOTATIONS
          </p>
          <p>
            User 3: Can see ALL annotations BUT can&apos;t edit, delete, Add
            annotation
          </p>
          <p>User 4: Can&apos;t see ANY annotations.</p>
          <p>User 5: Cant Download or Print</p>
          <p>User 6: Can&apos;t see the document</p>
        </div>
        <select
          onChange={(e) => {
            setUserId(e.target.value === '' ? '5' : e.target.value)
          }}
          defaultValue="5"
          value={userId}
        >
          <option value="1">Select User 1</option>
          <option value="2">Select User 2</option>
          <option value="3">Select User 3</option>
          <option value="4">Select User 4</option>
          <option value="5">Select User 5</option>
          <option value="6">Select User 6</option>
        </select>
      </div>
    </div>
  )
}
