import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs"; // Use nodejs instead of edge to support fs module
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // Hvis post ikke findes, giv et generisk billede
  const title = post?.title.substring(0, 50) + "\u2026";
  const excerpt = post?.excerpt?.substring(0, 200) + "\u2026";
  const author = post?.author ?? "Brian Emilius";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#375A7F",
          color: "white",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.9 }}>
          <div style={{ fontSize: 28, fontWeight: 700, display: "flex" }}>Topshelf Konsulentservices</div>
          <div style={{ fontSize: 22, opacity: 0.8, display: "flex" }}>topshelf.dk</div>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.25,
              color: "#E8F1F5",
              maxWidth: 980,
              display: "flex",
            }}
          >
            {excerpt}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, opacity: 0.85, display: "flex" }}>Af {author}</div>

          <div
            style={{
              padding: "12px 18px",
              borderRadius: 999,
              fontSize: 22,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
            }}
          >
            Tilgængelighed • UX • Web
          </div>
        </div>
      </div>
    ),
    size
  );
}
