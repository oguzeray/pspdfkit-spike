import dynamic from 'next/dynamic'

const PdfViewerComponent = dynamic(
  () => import('../Components/PdfViewerComponent'),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <PdfViewerComponent documentId="586c8492-1020-4e45-b02d-eb5508177682" />
  )
}
