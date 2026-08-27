"use client";

import { useEffect, useRef } from "react";

export default function CVPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">

      {/* PDF Viewer */}
      <iframe
        ref={iframeRef}
        src="/cv.pdf"
        className="w-full max-w-4xl h-[800px] border border-gray-300 rounded-md"
      />
    </div>
  );
}
