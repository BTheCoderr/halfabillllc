import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const alt = `${siteConfig.name} — Websites, Apps, MVPs, and Business Automations`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #050505 0%, #141414 55%, #1a1208 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#F5821F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "#231F20",
            }}
          >
            HAB
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 22, color: "#a1a1aa", letterSpacing: "0.08em" }}>
              {siteConfig.brandLine}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 32, color: "#d4d4d8", lineHeight: 1.35 }}>
            Websites · Apps · MVPs · Business Automations
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <span>Project intake · Booking · Launch-ready systems</span>
          <span style={{ color: "#F5821F", fontWeight: 600 }}>halfabilagency.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
