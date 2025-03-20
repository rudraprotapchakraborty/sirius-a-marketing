import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "AI Tool - OpenAI + Next.js SaaS Boilerplate"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #0D0B21, #1A1A2E)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div style={{ fontSize: 64, marginBottom: 40 }}>AI Tool</div>
      <div style={{ fontSize: 32, textAlign: "center", maxWidth: "80%" }}>OpenAI + Next.js SaaS Boilerplate</div>
    </div>,
    {
      ...size,
    },
  )
}

