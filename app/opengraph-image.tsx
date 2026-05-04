import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Sirius A Marketing - Results-Driven Digital Marketing Agency"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0D0B21 0%, #1A1A2E 50%, #2D1B69 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif",
        padding: "60px",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          background: "linear-gradient(to right, #a855f7, #6366f1)",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        Sirius A Marketing
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#d1d5db",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        The results-driven Social First Agency you&apos;ve been looking for
      </div>
    </div>,
    {
      ...size,
    },
  )
}
