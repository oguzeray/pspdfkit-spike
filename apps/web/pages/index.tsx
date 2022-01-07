import dynamic from 'next/dynamic'

const PdfViewerComponent = dynamic(
  () => import('../src/Components/PdfViewerComponent'),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <PdfViewerComponent
      document={
        'https://baumappestage.blob.core.windows.net/uploads/overtime/pdf/bb16e661-4c93-428b-8b18-281c4aa04c05/Rapport%20Nr.%201.pdf?v=1641591721208'
      }
    />
  )
}
