"use client";

import React from "react";
import { Progress } from "@/registry/nextjs/components/progress";
import Button from "@/registry/nextjs/components/button";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [downloadProgress, setDownloadProgress] = React.useState(45);
  const [isUploading, setIsUploading] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const startUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
  };

  const resetProgress = () => {
    setUploadProgress(0);
    setDownloadProgress(45);
    setProgress(13);
  };

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Progress Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Basic Progress */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Progress
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Progress value={progress} style={{ width: "60%" }} />
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    margin: 0,
                  }}
                >
                  {progress}% complete
                </p>
              </div>
            </div>

            {/* File Upload Progress */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                File Upload Progress
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Button onClick={startUpload} disabled={isUploading} variant="fill">
                    {isUploading ? "Uploading..." : "Start Upload"}
                  </Button>
                  <Button onClick={resetProgress} variant="outline">
                    Reset
                  </Button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>document.pdf</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {Math.round(uploadProgress)}%
                    </span>
                  </div>
                  <Progress value={uploadProgress} />
                  {uploadProgress === 100 && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--success)",
                        margin: "0.25rem 0 0 0",
                      }}
                    >
                      ✓ Upload complete
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Download Progress */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Download Progress
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Installing dependencies...</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {downloadProgress}%
                  </span>
                </div>
                <Progress value={downloadProgress} />
              </div>
            </div>

            {/* Different Sizes */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Different Sizes
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      margin: "0 0 0.5rem 0",
                      fontWeight: 500,
                    }}
                  >
                    Small (h-1)
                  </p>
                  <Progress
                    value={75}
                    style={{
                      height: "0.25rem",
                      width: "50%",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      margin: "0 0 0.5rem 0",
                      fontWeight: 500,
                    }}
                  >
                    Default (h-2)
                  </p>
                  <Progress value={75} style={{ width: "50%" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      margin: "0 0 0.5rem 0",
                      fontWeight: 500,
                    }}
                  >
                    Large (h-3)
                  </p>
                  <Progress
                    value={75}
                    style={{
                      height: "0.75rem",
                      width: "50%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Multiple Progress Bars */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Multiple Tasks
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Compiling TypeScript", value: 100 },
                  { label: "Bundling assets", value: 87 },
                  { label: "Optimizing images", value: 62 },
                  { label: "Generating static pages", value: 23 },
                  { label: "Creating manifest", value: 0 },
                ].map((task, index) => (
                  <div key={index} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: task.value === 100 ? "var(--success)" : "inherit",
                        }}
                      >
                        {task.value === 100 ? "✓ " : ""}
                        {task.label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {task.value}%
                      </span>
                    </div>
                    <Progress value={task.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
