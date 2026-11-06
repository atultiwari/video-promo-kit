import { COLORS, FONTS } from "../theme";

/**
 * Flat vector illustrations for thumbnails, drawn in the video's neon-on-navy style.
 * Each one is a self-contained SVG sized by `size` (its width).
 */

const STROKE = 6;

export const HospitalBuilding: React.FC<{ size: number; glow?: string }> = ({
  size,
  glow = COLORS.ice,
}) => (
  <svg
    width={size}
    height={size * 0.85}
    viewBox="0 0 400 340"
    style={{ filter: `drop-shadow(0 0 18px ${glow}88)` }}
  >
    {/* main block and wings */}
    <rect
      x={120}
      y={60}
      width={160}
      height={260}
      rx={10}
      fill="#16324A"
      stroke={glow}
      strokeWidth={STROKE}
    />
    <rect
      x={20}
      y={150}
      width={110}
      height={170}
      rx={10}
      fill="#132A3E"
      stroke={glow}
      strokeWidth={STROKE}
    />
    <rect
      x={270}
      y={150}
      width={110}
      height={170}
      rx={10}
      fill="#132A3E"
      stroke={glow}
      strokeWidth={STROKE}
    />
    {/* red cross sign */}
    <rect x={160} y={80} width={80} height={80} rx={14} fill="white" />
    <rect x={190} y={92} width={20} height={56} rx={4} fill={COLORS.red} />
    <rect x={172} y={110} width={56} height={20} rx={4} fill={COLORS.red} />
    {/* windows */}
    {[0, 1].map((r) =>
      [0, 1, 2].map((c) => (
        <rect
          key={`m-${r}-${c}`}
          x={142 + c * 42}
          y={185 + r * 45}
          width={28}
          height={28}
          rx={4}
          fill={COLORS.amber}
          opacity={0.85}
        />
      )),
    )}
    {[0, 1].map((r) =>
      [0, 1].map((c) => (
        <g key={`w-${r}-${c}`}>
          <rect
            x={40 + c * 40}
            y={180 + r * 45}
            width={26}
            height={26}
            rx={4}
            fill={COLORS.ice}
            opacity={0.6}
          />
          <rect
            x={290 + c * 40}
            y={180 + r * 45}
            width={26}
            height={26}
            rx={4}
            fill={COLORS.ice}
            opacity={0.6}
          />
        </g>
      )),
    )}
    {/* door */}
    <rect
      x={178}
      y={270}
      width={44}
      height={50}
      rx={6}
      fill={glow}
      opacity={0.9}
    />
    <line
      x1={10}
      x2={390}
      y1={322}
      y2={322}
      stroke={glow}
      strokeWidth={STROKE}
      strokeLinecap="round"
    />
  </svg>
);

/** A blood bank refrigerator: glass door, shelves of blood bags, a display on top. */
export const BloodBankFridge: React.FC<{
  size: number;
  temp: string;
  hot?: boolean;
}> = ({ size, temp, hot = true }) => {
  const c = hot ? COLORS.red : COLORS.ice;
  return (
    <svg
      width={size}
      height={size * 1.55}
      viewBox="0 0 220 340"
      style={{ filter: `drop-shadow(0 0 22px ${c}99)` }}
    >
      <rect
        x={10}
        y={10}
        width={200}
        height={320}
        rx={16}
        fill="#101C28"
        stroke={c}
        strokeWidth={STROKE}
      />
      {/* display */}
      <rect
        x={30}
        y={24}
        width={160}
        height={52}
        rx={8}
        fill="#05090D"
        stroke={c}
        strokeWidth={3}
      />
      <text
        x={110}
        y={62}
        textAnchor="middle"
        fill={c}
        fontFamily={FONTS.mono}
        fontWeight={700}
        fontSize={36}
      >
        {temp}
      </text>
      {/* glass door with shelves */}
      <rect
        x={28}
        y={90}
        width={164}
        height={222}
        rx={8}
        fill={hot ? "rgba(255,77,79,0.12)" : "rgba(127,216,245,0.10)"}
        stroke={c}
        strokeWidth={3}
      />
      {[0, 1, 2].map((shelf) => (
        <g key={shelf}>
          <line
            x1={34}
            x2={186}
            y1={160 + shelf * 70}
            y2={160 + shelf * 70}
            stroke={c}
            strokeWidth={3}
            opacity={0.7}
          />
          {[0, 1, 2].map((b) => (
            <BloodBagShape
              key={b}
              x={48 + b * 48}
              y={104 + shelf * 70}
              scale={0.42}
            />
          ))}
        </g>
      ))}
      <rect x={196} y={170} width={6} height={60} rx={3} fill={c} />
    </svg>
  );
};

/** A blood bag outline with a drop, placed inside another SVG. */
const BloodBagShape: React.FC<{ x: number; y: number; scale: number }> = ({
  x,
  y,
  scale,
}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <rect
      x={0}
      y={16}
      width={70}
      height={100}
      rx={18}
      fill={COLORS.red}
      opacity={0.9}
    />
    <rect x={28} y={0} width={14} height={20} rx={4} fill={COLORS.red} />
    <path
      d="M35 40 C 22 60, 22 78, 35 82 C 48 78, 48 60, 35 40 Z"
      fill="white"
      opacity={0.85}
    />
  </g>
);

export const BloodBag: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size * 1.6}
    viewBox="0 0 80 128"
    style={{ filter: `drop-shadow(0 0 16px ${COLORS.red}aa)` }}
  >
    <BloodBagShape x={5} y={4} scale={1} />
  </svg>
);

/** A doctor: head, white coat with lapels, stethoscope, clipboard. */
export const Doctor: React.FC<{ size: number; glow?: string; happy?: boolean }> = ({
  size,
  glow = COLORS.ice,
  happy = false,
}) => (
  <svg
    width={size}
    height={size * 1.25}
    viewBox="0 0 240 300"
    style={{ filter: `drop-shadow(0 0 18px ${glow}77)` }}
  >
    {/* coat */}
    <path
      d="M30 300 L40 170 Q50 135 90 128 L150 128 Q190 135 200 170 L210 300 Z"
      fill="#EEF4F8"
      stroke={glow}
      strokeWidth={STROKE}
    />
    <path d="M120 130 L96 200 L120 300 L144 200 Z" fill="#7FA9C9" />
    <path
      d="M90 128 L120 190 L150 128"
      fill="none"
      stroke="#9FB6C8"
      strokeWidth={6}
    />
    {/* head and hair */}
    <circle
      cx={120}
      cy={78}
      r={46}
      fill="#E2B48C"
      stroke={glow}
      strokeWidth={STROKE}
    />
    <path
      d="M76 70 Q80 26 120 28 Q162 26 166 70 Q150 50 120 52 Q92 50 76 70 Z"
      fill="#2B2B33"
    />
    {happy ? (
      <g>
        {/* smiling eyes, rosy cheeks, open smile */}
        <path d="M96 84 Q104 74 112 84" stroke="#2B2B33" strokeWidth={4.5} fill="none" strokeLinecap="round" />
        <path d="M128 84 Q136 74 144 84" stroke="#2B2B33" strokeWidth={4.5} fill="none" strokeLinecap="round" />
        <circle cx={92} cy={98} r={8} fill="#F08A7E" opacity={0.6} />
        <circle cx={148} cy={98} r={8} fill="#F08A7E" opacity={0.6} />
        <path d="M100 98 Q120 126 140 98 Z" fill="#7A2E2E" stroke="#2B2B33" strokeWidth={3.5} strokeLinejoin="round" />
        <path d="M106 100 Q120 106 134 100" stroke="white" strokeWidth={5} fill="none" strokeLinecap="round" />
      </g>
    ) : (
      <g>
        <circle cx={104} cy={82} r={5} fill="#2B2B33" />
        <circle cx={136} cy={82} r={5} fill="#2B2B33" />
        <path d="M106 102 Q120 110 134 102" stroke="#2B2B33" strokeWidth={4} fill="none" strokeLinecap="round" />
      </g>
    )}
    {/* stethoscope */}
    <path
      d="M88 136 Q70 200 104 220 Q130 230 136 200"
      fill="none"
      stroke="#1E2A36"
      strokeWidth={6}
      strokeLinecap="round"
    />
    <circle
      cx={138}
      cy={196}
      r={11}
      fill="#B0BCC6"
      stroke="#1E2A36"
      strokeWidth={4}
    />
    {/* clipboard */}
    <rect
      x={150}
      y={200}
      width={64}
      height={84}
      rx={8}
      fill="#C9A26B"
      stroke="#1E2A36"
      strokeWidth={4}
    />
    <rect x={160} y={214} width={44} height={60} rx={3} fill="white" />
    {[0, 1, 2].map((i) => (
      <path
        key={i}
        d={`M166 ${226 + i * 16} l5 5 l9 -10`}
        stroke={COLORS.green}
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
    ))}
  </svg>
);

/** A short checklist card with green ticks. */
export const ChecklistCard: React.FC<{ size: number; rows?: number }> = ({
  size,
  rows = 4,
}) => (
  <svg
    width={size}
    height={size * 1.2}
    viewBox="0 0 200 240"
    style={{ filter: `drop-shadow(0 0 18px ${COLORS.green}77)` }}
  >
    <rect
      x={8}
      y={20}
      width={184}
      height={212}
      rx={16}
      fill="#0F2A2A"
      stroke={COLORS.green}
      strokeWidth={STROKE}
    />
    <rect x={66} y={6} width={68} height={28} rx={8} fill={COLORS.green} />
    {Array.from({ length: rows }).map((_, i) => (
      <g key={i}>
        <rect
          x={28}
          y={54 + i * 44}
          width={28}
          height={28}
          rx={6}
          fill="none"
          stroke={COLORS.green}
          strokeWidth={4}
        />
        <path
          d={`M33 ${68 + i * 44} l7 7 l12 -14`}
          stroke={COLORS.green}
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
        />
        <rect
          x={70}
          y={62 + i * 44}
          width={100 - (i % 2) * 24}
          height={12}
          rx={6}
          fill="#CFE9E6"
          opacity={0.75}
        />
      </g>
    ))}
  </svg>
);
