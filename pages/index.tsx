import dynamic from 'next/dynamic'

const PdfViewerComponent = dynamic(
  () => import('../src/Components/PdfViewerComponent'),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <PdfViewerComponent documentId="bb16e661-4c93-428b-8b18-281c4aa04c05" />
  )
}
