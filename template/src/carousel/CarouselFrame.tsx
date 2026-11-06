import { AbsoluteFill, Img, staticFile } from "remotion";
import { Backdrop, type Mood } from "../components/Backdrop";
import { COLORS, FONTS } from "../theme";

export type CarouselMeta = {
  videoUrl: string;
  videoUrlShort: string;
  author: string;
  org: string;
  consultUrl: string;
  copyright: string;
};

export type CarouselFormat = "square" | "portrait";

/** 1:1 (1080×1080) is the default for Instagram; 4:5 (1080×1350) fills more of the feed. */
export const SLIDE_SIZE: Record<CarouselFormat, { width: number; height: number }> = {
  square: { width: 1080, height: 1080 },
  portrait: { width: 1080, height: 1350 },
};
export const SLIDE_W = 1080;
/**
 * Slides are designed for the 4:5 content area. In 1:1 the content area is scaled with CSS
 * zoom (which reflows layout, unlike transform), so the same slide fits without a redesign.
 */
const CONTENT_ZOOM: Record<CarouselFormat, number> = { square: 0.74, portrait: 1 };
const PAD_X = 72;

/** Co-branded header: VRL seal + name on the left, author on the right. */
const Header: React.FC<{ meta: CarouselMeta }> = ({ meta }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `44px ${PAD_X}px 0`,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      {/* White VRL seal: same design as the official logo, legible on the dark slides. */}
      <Img
        src={staticFile("brand/vrl-logo-white.png")}
        style={{ width: 104, height: 104 }}
      />
      <div
        style={{
          fontFamily: FONTS.sans,
          fontWeight: 700,
          fontSize: 30,
          lineHeight: 1.05,
          color: COLORS.text,
        }}
      >
        Vedant
        <br />
        Research Labs
      </div>
    </div>
    <div
      style={{
        textAlign: "right",
        fontFamily: FONTS.sans,
        fontSize: 28,
        color: COLORS.muted,
        lineHeight: 1.2,
      }}
    >
      <div style={{ fontWeight: 700, color: COLORS.text }}>{meta.author}</div>
      <div>AI in healthcare</div>
    </div>
  </div>
);

const Footer: React.FC<{
  meta: CarouselMeta;
  index: number;
  total: number;
}> = ({ meta, index, total }) => (
  <div
    style={{
      position: "absolute",
      left: PAD_X,
      right: PAD_X,
      bottom: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: FONTS.mono,
      fontSize: 24,
      color: COLORS.muted,
    }}
  >
    <span>{meta.copyright}</span>
    <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <span>
        {index + 1} / {total}
      </span>
      {index < total - 1 ? (
        <span style={{ color: COLORS.ice, fontWeight: 700 }}>SWIPE →</span>
      ) : null}
    </span>
  </div>
);

/** Every slide: background, header, content area, footer. */
export const CarouselFrame: React.FC<{
  meta: CarouselMeta;
  index: number;
  total: number;
  mood?: Mood;
  heat?: number;
  format?: CarouselFormat;
  children: React.ReactNode;
}> = ({ meta, index, total, mood = "cool", heat = 0, format = "square", children }) => (
  <AbsoluteFill style={{ width: SLIDE_SIZE[format].width, height: SLIDE_SIZE[format].height }}>
    <Backdrop mood={mood} heat={heat} />
    <AbsoluteFill>
      <Header meta={meta} />
      <div
        style={{
          position: "absolute",
          left: PAD_X,
          right: PAD_X,
          top: 170,
          bottom: 110,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ zoom: CONTENT_ZOOM[format], flex: 1, display: "flex", flexDirection: "column" }}>{children}</div>
      </div>
      <Footer meta={meta} index={index} total={total} />
    </AbsoluteFill>
  </AbsoluteFill>
);

export const Kicker: React.FC<{ text: string; color?: string }> = ({
  text,
  color = COLORS.ice,
}) => (
  <div
    style={{
      alignSelf: "flex-start",
      whiteSpace: "nowrap",
      fontFamily: FONTS.mono,
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: 3,
      color: COLORS.bgDeep,
      backgroundColor: color,
      padding: "8px 18px",
      borderRadius: 10,
    }}
  >
    {text}
  </div>
);

export const Source: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      marginTop: "auto",
      fontFamily: FONTS.mono,
      fontSize: 24,
      color: COLORS.muted,
    }}
  >
    {text}
  </div>
);

/** The video link as a pill, used on the first and last slides. */
export const WatchPill: React.FC<{
  label: string;
  url: string;
  size?: number;
}> = ({ label, url, size = 40 }) => (
  <div
    style={{
      alignSelf: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "18px 28px",
      borderRadius: 20,
      backgroundColor: COLORS.red,
      boxShadow: `0 0 40px ${COLORS.red}66`,
    }}
  >
    <div
      style={{
        fontFamily: FONTS.sans,
        fontWeight: 700,
        fontSize: size * 0.8,
        color: "white",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: FONTS.mono,
        fontWeight: 700,
        fontSize: size,
        color: "white",
      }}
    >
      {url}
    </div>
  </div>
);
