import { AbsoluteFill } from "remotion";
import { Backdrop } from "../components/Backdrop";
import { Icon } from "../components/Icon";
import { PaperTexture } from "../components/newspaper/PaperTexture";
import { Watermark } from "../components/Watermark";
import promo from "../data/promo.json";
import { COLORS, FONTS } from "../theme";
import { LESSON_VARIANTS } from "./LessonVariants";
import { TEACHING_VARIANTS } from "./TeachingVariants";

type T = Record<string, string>;
type Props = { thumbId: string };
const THUMBS = promo.thumbnails as unknown as T[];

/** Big glowing temperature panel, the video's recurring motif. */
const TempPanel: React.FC<{ temp: string; color: string; size: number }> = ({
  temp,
  color,
  size,
}) => (
  <div
    style={{
      borderRadius: 26,
      padding: `${size * 0.12}px ${size * 0.22}px`,
      backgroundColor: "rgba(10,16,22,0.9)",
      border: `5px solid ${color}`,
      boxShadow: `0 0 90px ${color}99, inset 0 0 40px ${color}33`,
    }}
  >
    <div
      style={{
        fontFamily: FONTS.mono,
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1,
        color,
        textShadow: `0 0 40px ${color}`,
      }}
    >
      {temp}
    </div>
  </div>
);

const Tag: React.FC<{ text: string; color?: string }> = ({
  text,
  color = COLORS.ice,
}) => (
  <div
    style={{
      display: "inline-block",
      alignSelf: "flex-start",
      whiteSpace: "nowrap",
      fontFamily: FONTS.mono,
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: 4,
      color: COLORS.bgDeep,
      backgroundColor: color,
      padding: "8px 18px",
      borderRadius: 8,
    }}
  >
    {text}
  </div>
);

const Thermometer: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={1} />
    <AbsoluteFill
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: "0 60px",
        gap: 50,
      }}
    >
      <TempPanel temp={t.temp} color={COLORS.red} size={190} />
      <div style={{ flex: 1 }}>
        <Tag text={t.tag} />
        <div
          style={{
            fontFamily: FONTS.sans,
            fontWeight: 700,
            fontSize: 92,
            lineHeight: 1,
            color: "white",
            marginTop: 22,
          }}
        >
          {t.headline}
        </div>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontWeight: 700,
            fontSize: 92,
            lineHeight: 1,
            color: COLORS.amber,
            marginTop: 10,
          }}
        >
          {t.accent}
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

const Newspaper: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill style={{ backgroundColor: "#1a130d" }}>
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 40% 40%, #5a3d22 0%, #1a130d 75%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 60,
        top: 30,
        width: 860,
        height: 760,
        rotate: "-5deg",
        boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
      }}
    >
      <PaperTexture id="thumbpaper" />
      <div style={{ position: "relative", padding: "30px 44px" }}>
        <div
          style={{
            fontFamily: FONTS.blackletter,
            fontSize: 84,
            textAlign: "center",
            color: COLORS.ink,
          }}
        >
          {t.masthead}
        </div>
        <div
          style={{
            borderTop: `4px solid ${COLORS.ink}`,
            borderBottom: `1px solid ${COLORS.ink}`,
            height: 6,
            margin: "8px 0 18px",
          }}
        />
        <div
          style={{
            fontFamily: FONTS.display,
            fontWeight: 900,
            fontSize: 96,
            lineHeight: 0.98,
            textAlign: "center",
            color: COLORS.ink,
          }}
        >
          {t.headline}
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 22 }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: 96,
              color: "#8b1a1a",
              border: "6px double #8b1a1a",
              padding: "0 30px",
            }}
          >
            50°C
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        right: 36,
        bottom: 70,
        rotate: "-8deg",
        border: `10px solid ${COLORS.red}`,
        borderRadius: 16,
        padding: "6px 26px",
        fontFamily: FONTS.mono,
        fontWeight: 700,
        fontSize: 72,
        color: COLORS.red,
        backgroundColor: "rgba(10,6,4,0.75)",
        letterSpacing: 2,
      }}
    >
      {t.stamp}
    </div>
    <div style={{ position: "absolute", right: 40, top: 36 }}>
      <Tag text={t.tag} color={COLORS.amber} />
    </div>
  </AbsoluteFill>
);

const Split: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <AbsoluteFill style={{ flexDirection: "row" }}>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Backdrop heat={1} />
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            paddingBottom: 110,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: 6,
              color: "white",
            }}
          >
            {t.leftLabel}
          </div>
          <TempPanel temp={t.leftTemp} color={COLORS.red} size={130} />
        </AbsoluteFill>
      </div>
      <div style={{ width: 8, backgroundColor: "white" }} />
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Backdrop mood="cool" />
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            paddingBottom: 110,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: 6,
              color: "white",
            }}
          >
            {t.rightLabel}
          </div>
          <TempPanel temp={t.rightTemp} color={COLORS.ice} size={130} />
        </AbsoluteFill>
      </div>
    </AbsoluteFill>
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 46,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.sans,
          fontWeight: 700,
          fontSize: 104,
          color: "white",
          backgroundColor: "rgba(5,8,12,0.88)",
          padding: "4px 40px",
          borderRadius: 18,
          border: `4px solid ${COLORS.amber}`,
        }}
      >
        {t.headline}
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

const Agent: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="violet" heat={0.4} />
    <AbsoluteFill
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: "0 50px",
        gap: 20,
      }}
    >
      <div
        style={{ position: "relative", width: 400, height: 420, flexShrink: 0 }}
      >
        <div
          style={{
            position: "absolute",
            left: 150,
            top: 40,
            color: COLORS.red,
          }}
        >
          <Icon name="door" size={280} strokeWidth={1.4} />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 150,
            color: COLORS.ice,
            filter: `drop-shadow(0 0 30px ${COLORS.ice})`,
          }}
        >
          <Icon name="bot" size={240} strokeWidth={1.5} />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Tag text={t.tag} color={COLORS.violet} />
        <div
          style={{
            fontFamily: FONTS.sans,
            fontWeight: 700,
            fontSize: 100,
            lineHeight: 1,
            whiteSpace: "nowrap",
            color: "white",
            marginTop: 22,
          }}
        >
          {t.headline}
        </div>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontWeight: 700,
            fontSize: 62,
            lineHeight: 1.05,
            color: COLORS.amber,
            marginTop: 16,
          }}
        >
          {t.accent}
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

const Question: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.75} />
    <AbsoluteFill
      style={{ padding: "60px 70px", justifyContent: "space-between" }}
    >
      <Tag text={t.tag} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.sans,
            fontWeight: 700,
            fontSize: 96,
            lineHeight: 1.02,
            color: "white",
            maxWidth: 760,
          }}
        >
          {t.headline}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div style={{ color: COLORS.red }}>
            <Icon name="droplet" size={110} strokeWidth={1.6} />
          </div>
          <TempPanel temp={t.temp} color={COLORS.red} size={110} />
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

const VARIANTS: Record<string, React.FC<{ t: T }>> = {
  thermometer: Thermometer,
  newspaper: Newspaper,
  split: Split,
  agent: Agent,
  question: Question,
  ...LESSON_VARIANTS,
  ...TEACHING_VARIANTS,
};

/** One YouTube thumbnail option (1280×720), chosen by id from src/data/promo.json. */
export const ThumbnailVariant: React.FC<Props> = ({ thumbId }) => {
  const t = THUMBS.find((x) => x.id === thumbId);
  if (!t) throw new Error(`No thumbnail "${thumbId}" in src/data/promo.json`);
  const Variant = VARIANTS[t.variant];
  if (!Variant) throw new Error(`Unknown thumbnail variant "${t.variant}"`);
  return (
    <AbsoluteFill>
      <Variant t={t} />
      <Watermark text={promo.brand.watermark} scale={0.9} />
    </AbsoluteFill>
  );
};
