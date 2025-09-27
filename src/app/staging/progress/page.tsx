// app/progress/page.tsx

import { Progress, ProgressIndicator } from "@/registry/nextjs/components/progress"
import { useState, useEffect } from "react"

export default function Page() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>Progress Example</h1>

      <Progress value={progress}>
        <ProgressIndicator
          style={{
            width: `${progress}%`,
            background: "gray",
            height: 12,
            transition: "width 0.3s ease",
          }}
        />
      </Progress>

      <p style={{ marginTop: 12 }}>Progress: {progress}%</p>
    </main>
  )
}
