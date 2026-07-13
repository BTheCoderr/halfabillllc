import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const alt = `${siteConfig.name} — Websites, Apps, AI Systems, and Business Automations`;
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
          background: "linear-gradient(145deg, #050505 0%, #0d0d0d 55%, #171204 100%)",
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
              background: "linear-gradient(135deg, #F2D675 0%, #D4AF37 55%, #9A6B16 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              color: "#050505",
              letterSpacing: "-0.02em",
            }}
          >
            HAB
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 22,
                color: "#D4AF37",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
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
            Websites · Apps · AI Systems · Business Automations
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#a1a1aa",
          }}
        >
          <span>Project intake · Booking · Launch-ready systems</span>
          <span style={{ color: "#D4AF37", fontWeight: 600 }}>halfabilagency.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
