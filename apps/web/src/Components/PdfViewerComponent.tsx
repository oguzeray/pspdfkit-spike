import { useEffect, useRef } from "react";
import PSPDFKit, { Instance } from "pspdfkit";

interface PdfViewerComponentProps {
  document: string | ArrayBuffer;
}

export default function PdfViewerComponent({
  document
}: PdfViewerComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async function () {
      if (!containerRef.current) {
        return;
      }

      await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container: containerRef.current,
        // The document to open.
        document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `http://localhost:3000/`
      });
    })();

    return () => {
      PSPDFKit && PSPDFKit.unload(containerRef.current);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
