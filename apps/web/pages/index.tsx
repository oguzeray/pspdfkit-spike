import dynamic from "next/dynamic";

const PdfViewerComponent = dynamic(
  () => import("../src/Components/PdfViewerComponent"),
  {
    ssr: false
  }
);

export default function Web() {
  return <PdfViewerComponent document={"./pdf/pd.pdf"} />;
}
