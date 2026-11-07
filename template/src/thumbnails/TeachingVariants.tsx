/**
 * Teaching thumbnails (from "What is AI, really?", Nov 2026). Text fields as in promo.json;
 * the owner picked `headlineDiagram` (big two-line headline beside a clear diagram) over the
 * split verdict layout.
 */
import { AbsoluteFill } from "remotion";
import { Backdrop } from "../components/Backdrop";
import { COLORS, FONTS } from "../theme";
import { Doctor } from "./illustrations";
import { ChestFilm, EcgPrintout, NestedCircles, OximeterFinger } from "./teaching-illustrations";

type T = Record<string, string>;

const Tag: React.FC<{ text: string; color?: string }> = ({ text, color = COLORS.ice }) => (
  <div style={{ alignSelf: "flex-start", whiteSpace: "nowrap", fontFamily: FONTS.mono, fontWeight: 700, fontSize: 34, letterSpacing: 2, color: COLORS.bgDeep, backgroundColor: color, padding: "6px 16px", borderRadius: 8 }}>{text}</div>
);
const Big: React.FC<{ text: string; size: number; color?: string; glow?: boolean }> = ({ text, size, color = "white", glow }) => (
  <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: size, lineHeight: 0.98, color, whiteSpace: "nowrap", textShadow: glow ? `0 0 34px ${color}66, 0 4px 18px rgba(0,0,0,0.6)` : "0 4px 18px rgba(0,0,0,0.6)" }}>{text}</div>
);

const Verdict: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: 64, color: COLORS.bgDeep, backgroundColor: color, padding: "4px 26px", borderRadius: 14, boxShadow: `0 0 40px ${color}88` }}>{text}</div>
);

/** Two objects with a verdict under each: `headline`, `tag`, `left`/`right` (verdicts). */
export const TwoVerdicts: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="cool" />
    <AbsoluteFill style={{ padding: "36px 48px", gap: 10 }}>
      <Tag text={t.tag} />
      <Big text={t.headline} size={104} color={COLORS.green} glow />
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", marginTop: "auto", marginBottom: 30 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}><OximeterFinger size={470} /><Verdict text={t.left ?? "NOT AI"} color={COLORS.ice} /></div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}><EcgPrintout size={430} /><Verdict text={t.right ?? "AI?"} color={COLORS.pink} /></div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** B · nested circles + "What is AI, really?" */
export const HeadlineDiagram: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="cool" />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 40px 0 56px", gap: 30 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <Tag text={t.tag} />
        <Big text={t.headline} size={84} />
        <Big text={t.accent} size={124} color={COLORS.green} glow />
      </div>
      <NestedCircles size={560} />
    </AbsoluteFill>
  </AbsoluteFill>
);

/** C · doctor + "AI, decoded for doctors" */
export const DoctorHeadline: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="hope" />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 30px 0 56px", gap: 10 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <Tag text={t.tag} />
        <Big text={t.headline} size={150} color={COLORS.green} glow />
        <Big text={t.accent} size={84} />
        <div style={{ fontFamily: FONTS.sans, fontWeight: 500, fontSize: 44, color: COLORS.ice, marginTop: 6 }}>{t.sub}</div>
      </div>
      <Doctor size={400} />
    </AbsoluteFill>
  </AbsoluteFill>
);

/** D · the ECG printout, enlarged, with the question on it */
export const ObjectQuestion: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="cool" heat={0.2} />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 40px 0 56px", gap: 34 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <Tag text={t.tag} color={COLORS.pink} />
        <Big text={t.headline} size={92} />
        <Big text={t.accent} size={132} color={COLORS.pink} glow />
      </div>
      <div style={{ rotate: "-4deg" }}><EcgPrintout size={560} /></div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** E · one chest X-ray, three kinds of AI */
export const ObjectChips: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="cool" />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 56px", gap: 44 }}>
      <ChestFilm size={360} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
        <Tag text={t.tag} />
        <Big text={t.headline} size={88} />
        {(t.chips ?? "RULES|MACHINE LEARNING|DEEP LEARNING").split("|").map((s, i) => [s, [COLORS.amber, COLORS.violet, COLORS.green][i % 3]]).map(([s, c]) => (
          <div key={s} style={{ alignSelf: "flex-start", fontFamily: FONTS.sans, fontWeight: 700, fontSize: 58, color: COLORS.bgDeep, backgroundColor: c, padding: "2px 22px", borderRadius: 12 }}>{s}</div>
        ))}
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** F · the series question */
export const QuestionChoices: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop mood="hope" />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 40px 0 56px", gap: 20 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <Tag text={t.tag} />
        <Big text={t.headline} size={96} />
        <Big text={t.accent} size={110} color={COLORS.amber} glow />
        <div style={{ display: "flex", gap: 20, marginTop: 10 }}>
          <Verdict text={t.left ?? "A DOCTOR?"} color={COLORS.ice} /><Verdict text={t.right ?? "THE DATA?"} color={COLORS.green} />
        </div>
      </div>
      <Doctor size={330} />
    </AbsoluteFill>
  </AbsoluteFill>
);

export const TEACHING_VARIANTS: Record<string, React.FC<{ t: T }>> = {
  twoVerdicts: TwoVerdicts, headlineDiagram: HeadlineDiagram, doctorHeadline: DoctorHeadline,
  objectQuestion: ObjectQuestion, objectChips: ObjectChips, questionChoices: QuestionChoices,
};
