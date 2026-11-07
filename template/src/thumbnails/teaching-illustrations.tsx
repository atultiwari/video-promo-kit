/**
 * Teaching illustrations for medical-education thumbnails, flat neon-on-navy like illustrations.tsx.
 * Drawn to be recognisable at phone size: the finger has a nail and knuckle creases (the owner
 * rejected a bar-shaped finger in a video, Nov 2026).
 */
import { COLORS, FONTS } from "../theme";

/** A fingertip seen from the side, nail up, with a pulse-oximeter clip and its display. */
export const OximeterFinger: React.FC<{ size: number; reading?: string }> = ({ size, reading = "98" }) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 400 248" style={{ filter: `drop-shadow(0 0 16px ${COLORS.ice}55)` }}>
    {/* finger: base at the right edge, rounded pad at the tip on the left */}
    <path d="M400 92 C330 88 250 86 175 90 C120 93 74 100 56 128 C42 150 52 178 84 186 C140 198 260 194 400 190 Z" fill="#E7B48F" stroke="#7A4E33" strokeWidth={4} />
    {/* nail on the top of the tip */}
    <path d="M70 108 C92 92 150 86 188 90 C186 104 182 114 176 118 C140 116 104 118 78 126 C72 122 69 115 70 108 Z" fill="#F6D8C6" stroke="#9A6A4E" strokeWidth={3} />
    <path d="M84 121 C110 114 146 112 174 113" stroke="#C99A80" strokeWidth={3} fill="none" />
    {/* knuckle creases */}
    {[300, 316].map((x) => <path key={x} d={`M${x} 100 C${x - 6} 130 ${x - 6} 160 ${x} 184`} stroke="#B07A58" strokeWidth={3} fill="none" opacity={0.7} />)}
    {/* the clip: upper and lower jaws around the fingertip */}
    <path d="M120 64 L250 64 Q262 64 262 76 L262 104 L120 104 Q108 104 108 92 L108 76 Q108 64 120 64 Z" fill="#1B2A36" stroke={COLORS.ice} strokeWidth={4} />
    <path d="M118 182 L252 182 Q264 182 264 194 L264 214 Q264 226 252 226 L118 226 Q106 226 106 214 L106 194 Q106 182 118 182 Z" fill="#1B2A36" stroke={COLORS.ice} strokeWidth={4} />
    <path d="M262 84 Q300 132 264 202" stroke={COLORS.ice} strokeWidth={5} fill="none" />
    {/* display */}
    <rect x={132} y={10} width={112} height={50} rx={8} fill="#070B0F" stroke={COLORS.ice} strokeWidth={3} />
    <text x={188} y={47} textAnchor="middle" fontFamily={FONTS.mono} fontWeight={700} fontSize={36} fill={COLORS.green}>{reading}%</text>
  </svg>
);

/** A 12-lead style printout: grid paper, a trace, and the printed one-line reading. */
export const EcgPrintout: React.FC<{ size: number; reading?: string }> = ({ size, reading = "Sinus rhythm · Normal ECG" }) => {
  const beats = 4, w = 400, y = 150;
  const shape: [number, number][] = [[0, 0], [0.12, 0], [0.17, -10], [0.22, 0], [0.3, 0], [0.33, 12], [0.37, -78], [0.41, 26], [0.44, 0], [0.56, 0], [0.64, -20], [0.72, 0], [1, 0]];
  const d = Array.from({ length: beats }, (_, b) => shape.map(([u, v]) => `${20 + (b + u) * (w - 40) / beats},${y + v}`)).flat().join(" L");
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 400 240" style={{ filter: `drop-shadow(0 0 16px ${COLORS.pink}55)` }}>
      <rect x={4} y={4} width={392} height={232} rx={10} fill="#FFF5F7" stroke={COLORS.pink} strokeWidth={5} />
      {Array.from({ length: 19 }, (_, i) => <line key={`v${i}`} x1={20 + i * 20} y1={70} x2={20 + i * 20} y2={220} stroke="#F4B6C6" strokeWidth={i % 5 === 0 ? 2 : 1} />)}
      {Array.from({ length: 8 }, (_, i) => <line key={`h${i}`} x1={20} y1={80 + i * 20} x2={380} y2={80 + i * 20} stroke="#F4B6C6" strokeWidth={i % 5 === 0 ? 2 : 1} />)}
      <path d={`M${d}`} fill="none" stroke="#1A1A1A" strokeWidth={4} strokeLinejoin="round" />
      <text x={22} y={46} fontFamily={FONTS.mono} fontWeight={700} fontSize={22} fill="#1A1A1A">{reading}</text>
    </svg>
  );
};

/** A PA chest film: dark film, ribs, lung fields, heart shadow, diaphragm. */
export const ChestFilm: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 300 345" style={{ filter: `drop-shadow(0 0 18px ${COLORS.ice}55)` }}>
    <rect x={4} y={4} width={292} height={337} rx={10} fill="#0A1218" stroke={COLORS.ice} strokeWidth={4} />
    <path d="M150 30 L150 320" stroke="#C9D6DE" strokeWidth={10} opacity={0.7} />
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const y = 80 + i * 34;
      return <g key={i} stroke="#C9D6DE" strokeWidth={6} fill="none" opacity={0.75}>
        <path d={`M140 ${y} Q80 ${y - 22} 42 ${y + 26}`} /><path d={`M160 ${y} Q220 ${y - 22} 258 ${y + 26}`} />
      </g>;
    })}
    <ellipse cx={95} cy={170} rx={58} ry={110} fill="#2E4656" opacity={0.55} />
    <ellipse cx={205} cy={170} rx={58} ry={110} fill="#2E4656" opacity={0.55} />
    <path d="M128 200 Q118 250 150 282 Q205 300 222 252 Q228 210 190 196 Q160 186 128 200 Z" fill="#DDE7EC" opacity={0.85} />
    <path d="M36 292 Q90 252 146 290 M154 292 Q210 256 264 292" stroke="#C9D6DE" strokeWidth={7} fill="none" />
  </svg>
);

/** Concentric AI ⊃ ML ⊃ DL with labels. */
export const NestedCircles: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 400 400" style={{ filter: `drop-shadow(0 0 20px ${COLORS.violet}66)` }}>
    <circle cx={200} cy={200} r={192} fill={`${COLORS.iceDeep}33`} stroke={COLORS.ice} strokeWidth={6} />
    <circle cx={200} cy={240} r={140} fill={`${COLORS.violet}33`} stroke={COLORS.violet} strokeWidth={6} />
    <circle cx={200} cy={282} r={84} fill={`${COLORS.green}44`} stroke={COLORS.green} strokeWidth={6} />
    <text x={200} y={66} textAnchor="middle" fontFamily={FONTS.sans} fontWeight={700} fontSize={44} fill="white">AI</text>
    <text x={200} y={140} textAnchor="middle" fontFamily={FONTS.sans} fontWeight={700} fontSize={24} fill="white">MACHINE</text><text x={200} y={168} textAnchor="middle" fontFamily={FONTS.sans} fontWeight={700} fontSize={24} fill="white">LEARNING</text>
    <text x={200} y={292} textAnchor="middle" fontFamily={FONTS.sans} fontWeight={700} fontSize={30} fill="white">DEEP</text>
    <text x={200} y={324} textAnchor="middle" fontFamily={FONTS.sans} fontWeight={700} fontSize={30} fill="white">LEARNING</text>
  </svg>
);

