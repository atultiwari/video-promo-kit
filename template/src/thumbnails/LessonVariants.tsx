import { AbsoluteFill } from "remotion";
import { Backdrop } from "../components/Backdrop";
import { COLORS, FONTS } from "../theme";
import { BloodBankFridge, ChecklistCard, Doctor, HospitalBuilding } from "./illustrations";

type T = Record<string, string>;

/** The A-style glowing temperature panel, reused across the lesson variants. */
export const TempPanel: React.FC<{ temp: string; size: number; color?: string }> = ({ temp, size, color = COLORS.red }) => (
  <div style={{ borderRadius: 24, padding: `${size * 0.1}px ${size * 0.2}px`, backgroundColor: "rgba(10,16,22,0.92)", border: `5px solid ${color}`, boxShadow: `0 0 80px ${color}99, inset 0 0 40px ${color}33` }}>
    <div style={{ fontFamily: FONTS.mono, fontWeight: 700, fontSize: size, lineHeight: 1, color, textShadow: `0 0 36px ${color}` }}>{temp}</div>
  </div>
);

const Pill: React.FC<{ text: string; color?: string }> = ({ text, color = COLORS.ice }) => (
  <div style={{ alignSelf: "flex-start", whiteSpace: "nowrap", fontFamily: FONTS.mono, fontWeight: 700, fontSize: 26, letterSpacing: 3, color: COLORS.bgDeep, backgroundColor: color, padding: "7px 16px", borderRadius: 8 }}>{text}</div>
);

const Headline: React.FC<{ top: string; bottom: string; size?: number; bottomColor?: string }> = ({ top, bottom, size = 84, bottomColor = COLORS.green }) => (
  <div>
    <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: size, lineHeight: 1, color: "white" }}>{top}</div>
    <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: size * 0.82, lineHeight: 1.02, color: bottomColor, marginTop: 10 }}>{bottom}</div>
  </div>
);

/** F · 50°C panel + headline, with a row of hospital illustrations along the bottom. */
export const LessonsRow: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.7} />
    <AbsoluteFill style={{ padding: "44px 56px", gap: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <TempPanel temp={t.temp} size={150} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Pill text={t.tag} />
          <Headline top={t.headline} bottom={t.accent} size={78} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", marginTop: "auto" }}>
        <HospitalBuilding size={250} />
        <BloodBankFridge size={130} temp="4°C" hot={false} />
        <Doctor size={170} />
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** G · a hospital with the hot display hanging over it. */
export const HospitalLearn: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.55} />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 50px", gap: 20 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        <Pill text={t.tag} />
        <Headline top={t.headline} bottom={t.accent} size={88} />
      </div>
      <div style={{ position: "relative", width: 520, height: 520 }}>
        <div style={{ position: "absolute", left: 20, bottom: 30 }}><HospitalBuilding size={500} /></div>
        <div style={{ position: "absolute", right: 0, top: 10, rotate: "6deg" }}><TempPanel temp={t.temp} size={100} /></div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** H · a doctor reading the hot blood bank fridge. */
export const DoctorFridge: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.5} />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 40px 0 56px", gap: 10 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        <Pill text={t.tag} />
        <Headline top={t.headline} bottom={t.accent} size={86} />
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 0, paddingTop: 60 }}>
        <BloodBankFridge size={270} temp={t.temp} />
        <div style={{ marginLeft: -20 }}><Doctor size={250} /></div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** I · from the 50°C problem to the checklist of fixes. */
export const ProblemToChecklist: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.45} mood="hope" />
    <AbsoluteFill style={{ padding: "50px 56px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Pill text={t.tag} color={COLORS.green} />
        <Headline top={t.headline} bottom={t.accent} size={86} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
        <TempPanel temp={t.temp} size={120} />
        <div style={{ fontFamily: FONTS.mono, fontWeight: 700, fontSize: 110, color: "white" }}>→</div>
        <ChecklistCard size={190} />
        <div style={{ marginLeft: "auto" }}><HospitalBuilding size={300} glow={COLORS.green} /></div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** J · decoded: the fridge, the doctor and a magnifying "decoded" feel through layout. */
export const Decoded: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.6} />
    <AbsoluteFill style={{ flexDirection: "row", alignItems: "center", padding: "0 50px", gap: 30 }}>
      <div style={{ position: "relative", width: 470, height: 600 }}>
        <div style={{ position: "absolute", left: 0, bottom: 40 }}><BloodBankFridge size={300} temp={t.temp} /></div>
        <div style={{ position: "absolute", right: 0, bottom: 40 }}><ChecklistCard size={170} /></div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        <Pill text={t.tag} color={COLORS.amber} />
        <Headline top={t.headline} bottom={t.accent} size={90} bottomColor={COLORS.ice} />
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** K · H + I blend: headline with the doctor beside it; hot fridge → checklist → green hospital below. */
export const FridgeToFix: React.FC<{ t: T }> = ({ t }) => (
  <AbsoluteFill>
    <Backdrop heat={0.35} mood="hope" />
    <div style={{ position: "absolute", right: 22, top: 36 }}>
      <Doctor size={276} />
    </div>
    <AbsoluteFill style={{ padding: "34px 44px 52px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ alignSelf: "flex-start", whiteSpace: "nowrap", fontFamily: FONTS.mono, fontWeight: 700, fontSize: 34, letterSpacing: 2, color: COLORS.bgDeep, backgroundColor: COLORS.ice, padding: "6px 16px", borderRadius: 8, marginBottom: 12 }}>{t.tag}</div>
        {/* Context lines smaller; the subject (Healthcare AI) is the largest line. */}
        <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: 70, lineHeight: 1, color: "white", textShadow: "0 4px 18px rgba(0,0,0,0.6)" }}>{t.headline}</div>
        <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: 70, lineHeight: 1, color: "white", textShadow: "0 4px 18px rgba(0,0,0,0.6)" }}>{t.accent}</div>
        <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: 116, lineHeight: 0.95, whiteSpace: "nowrap", color: COLORS.green, textShadow: `0 0 34px ${COLORS.green}66, 0 4px 18px rgba(0,0,0,0.6)` }}>{t.accent2}</div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 34 }}>
        <BloodBankFridge size={168} temp={t.temp} />
        <Arrow />
        <div style={{ marginBottom: 22 }}><ChecklistCard size={168} /></div>
        <Arrow />
        <HospitalBuilding size={300} glow={COLORS.green} />
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

const Arrow: React.FC = () => (
  <div style={{ fontFamily: FONTS.mono, fontWeight: 700, fontSize: 80, color: "white", marginBottom: 70, textShadow: "0 0 20px rgba(255,255,255,0.5)" }}>→</div>
);

export const LESSON_VARIANTS: Record<string, React.FC<{ t: T }>> = {
  lessonsRow: LessonsRow,
  hospitalLearn: HospitalLearn,
  doctorFridge: DoctorFridge,
  problemToChecklist: ProblemToChecklist,
  decoded: Decoded,
  fridgeToFix: FridgeToFix,
};
