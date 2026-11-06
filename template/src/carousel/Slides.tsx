import { QrCode } from "../components/QrCode";
import { Icon } from "../components/Icon";
import { TempPanel } from "../thumbnails/LessonVariants";
import {
  BloodBankFridge,
  ChecklistCard,
  Doctor,
  HospitalBuilding,
} from "../thumbnails/illustrations";
import { COLORS, FONTS } from "../theme";
import { Kicker, Source, WatchPill, type CarouselMeta } from "./CarouselFrame";

/* eslint-disable @typescript-eslint/no-explicit-any */
type S = Record<string, any>;
type SlideProps = { s: S; meta: CarouselMeta };

const H1: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
}> = ({ children, size = 92, color = "white" }) => (
  <div
    style={{
      fontFamily: FONTS.sans,
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1.02,
      color,
    }}
  >
    {children}
  </div>
);

const Body: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 44,
}) => (
  <div
    style={{
      fontFamily: FONTS.sans,
      fontSize: size,
      lineHeight: 1.3,
      color: COLORS.text,
    }}
  >
    {children}
  </div>
);

export const Cover: React.FC<SlideProps> = ({ s, meta }) => (
  <>
    <Kicker text={s.tag} />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 26,
      }}
    >
      <div>
        <H1 size={84} color="white">
          {s.line1}
        </H1>
        <H1 size={84} color="white">
          {s.line2}
        </H1>
        <H1 size={120} color={COLORS.green}>
          {s.line3}
        </H1>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: 40,
      }}
    >
      <BloodBankFridge size={190} temp="50°C" />
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 80,
          color: "white",
          marginBottom: 120,
        }}
      >
        →
      </div>
      <div style={{ marginBottom: 40 }}>
        <ChecklistCard size={170} />
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 80,
          color: "white",
          marginBottom: 120,
        }}
      >
        →
      </div>
      <Doctor size={220} />
    </div>
    <div style={{ marginTop: "auto" }}>
      <WatchPill label={s.watch} url={meta.videoUrlShort} size={44} />
    </div>
  </>
);

export const Night: React.FC<SlideProps> = ({ s }) => (
  <>
    <Kicker text={s.kicker} color={COLORS.amber} />
    <div style={{ marginTop: 30 }}>
      <H1 size={88}>{s.title}</H1>
    </div>
    <div
      style={{ display: "flex", justifyContent: "center", margin: "44px 0" }}
    >
      <TempPanel temp="50°C" size={170} />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {s.points.map((p: string, i: number) => (
        <div
          key={p}
          style={{ display: "flex", gap: 20, alignItems: "flex-start" }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: 40,
              color: i === s.points.length - 1 ? COLORS.amber : COLORS.red,
            }}
          >
            ●
          </span>
          <Body size={i === s.points.length - 1 ? 46 : 42}>
            {i === s.points.length - 1 ? (
              <b style={{ color: COLORS.amber }}>{p}</b>
            ) : (
              p
            )}
          </Body>
        </div>
      ))}
    </div>
    <Source text={s.source} />
  </>
);

export const Numbers: React.FC<SlideProps> = ({ s }) => (
  <>
    <H1 size={96}>{s.title}</H1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 28,
        marginTop: 40,
      }}
    >
      {s.stats.map((st: S) => (
        <div
          key={st.label}
          style={{
            padding: "28px 30px",
            borderRadius: 24,
            backgroundColor: "rgba(19,29,38,0.85)",
            border: `2px solid ${COLORS.panelEdge}`,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: 96,
              color: COLORS.red,
              lineHeight: 1,
            }}
          >
            {st.value}
          </div>
          <div
            style={{
              fontFamily: FONTS.sans,
              fontSize: 36,
              color: COLORS.text,
              marginTop: 10,
            }}
          >
            {st.label}
          </div>
        </div>
      ))}
    </div>
    <div
      style={{
        marginTop: 50,
        borderLeft: `8px solid ${COLORS.amber}`,
        paddingLeft: 30,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontStyle: "italic",
          fontSize: 60,
          lineHeight: 1.15,
          color: "white",
        }}
      >
        {s.quote}
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 26,
          color: COLORS.muted,
          marginTop: 14,
        }}
      >
        — {s.quoteBy}
      </div>
    </div>
    <Source text={s.source} />
  </>
);

export const Pivot: React.FC<SlideProps> = ({ s }) => (
  <>
    <div style={{ marginTop: 20 }}>
      <H1 size={92}>{s.line1}</H1>
      <div style={{ marginTop: 18 }}>
        <H1 size={92} color={COLORS.ice}>
          {s.line2}
        </H1>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "36px 0 28px",
      }}
    >
      <HospitalBuilding size={380} glow={COLORS.amber} />
    </div>
    <Body size={40}>{s.body}</Body>
  </>
);

export const Failures: React.FC<SlideProps> = ({ s }) => (
  <>
    <H1 size={88}>{s.title}</H1>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        marginTop: 44,
      }}
    >
      {s.items.map((it: string, i: number) => {
        const hidden = it === "?";
        return (
          <div
            key={`${i}-${it}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              padding: "22px 28px",
              borderRadius: 20,
              backgroundColor: hidden
                ? "rgba(255,77,79,0.14)"
                : "rgba(19,29,38,0.85)",
              border: `2px ${hidden ? "dashed" : "solid"} ${hidden ? COLORS.red : COLORS.panelEdge}`,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontWeight: 700,
                fontSize: 64,
                color: hidden ? COLORS.red : COLORS.amber,
                width: 90,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontWeight: 700,
                fontSize: hidden ? 64 : 46,
                color: hidden ? COLORS.red : "white",
              }}
            >
              {hidden ? "? ? ?" : it}
            </div>
          </div>
        );
      })}
    </div>
    <div style={{ marginTop: "auto" }}>
      <Body size={44}>
        <b style={{ color: COLORS.amber }}>{s.teaser}</b>
      </Body>
    </div>
  </>
);

export const Mirror: React.FC<SlideProps> = ({ s }) => (
  <>
    <H1 size={84}>{s.title}</H1>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: FONTS.mono,
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: 4,
        marginTop: 40,
      }}
    >
      <span style={{ color: COLORS.ice }}>SUPERMARKET</span>
      <span style={{ color: COLORS.amber }}>HOSPITAL / LAB</span>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        marginTop: 18,
      }}
    >
      {s.rows.map((r: S) => (
        <div
          key={r.left}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 60px 1.2fr",
            alignItems: "center",
            gap: 10,
            padding: "24px 26px",
            borderRadius: 20,
            backgroundColor: "rgba(19,29,38,0.85)",
            border: `2px solid ${COLORS.panelEdge}`,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.sans,
              fontSize: 36,
              color: COLORS.text,
              lineHeight: 1.2,
            }}
          >
            {r.left}
          </div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 44,
              color: COLORS.muted,
              textAlign: "center",
            }}
          >
            →
          </div>
          <div
            style={{
              fontFamily: FONTS.sans,
              fontWeight: 700,
              fontSize: 38,
              color: COLORS.amber,
              lineHeight: 1.2,
            }}
          >
            {r.right}
          </div>
        </div>
      ))}
    </div>
    <div
      style={{
        marginTop: "auto",
        alignSelf: "flex-start",
        padding: "16px 26px",
        borderRadius: 16,
        border: `2px dashed ${COLORS.ice}`,
        fontFamily: FONTS.sans,
        fontWeight: 700,
        fontSize: 40,
        color: COLORS.ice,
      }}
    >
      {s.more}
    </div>
  </>
);

export const Agent: React.FC<SlideProps> = ({ s }) => (
  <>
    <Kicker text={s.kicker} color={COLORS.violet} />
    <div
      style={{ display: "flex", alignItems: "center", gap: 30, marginTop: 30 }}
    >
      <div style={{ flex: 1 }}>
        <H1 size={86}>{s.title}</H1>
      </div>
      <div
        style={{
          color: COLORS.ice,
          filter: `drop-shadow(0 0 24px ${COLORS.ice})`,
        }}
      >
        <Icon name="bot" size={220} strokeWidth={1.4} />
      </div>
    </div>
    <div style={{ marginTop: 34 }}>
      <Body size={42}>{s.body}</Body>
    </div>
    <div
      style={{
        marginTop: 40,
        borderLeft: `8px solid ${COLORS.amber}`,
        paddingLeft: 30,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontStyle: "italic",
          fontSize: 64,
          lineHeight: 1.1,
          color: "white",
        }}
      >
        {s.quote}
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 26,
          color: COLORS.muted,
          marginTop: 12,
        }}
      >
        — {s.quoteBy}
      </div>
    </div>
    <Source text={s.source} />
  </>
);

export const Poison: React.FC<SlideProps> = ({ s }) => (
  <>
    <div
      style={{
        fontFamily: FONTS.mono,
        fontWeight: 700,
        fontSize: 200,
        lineHeight: 1,
        color: COLORS.red,
        textShadow: `0 0 40px ${COLORS.red}88`,
        marginTop: 20,
      }}
    >
      {s.value}
    </div>
    <div style={{ marginTop: 10 }}>
      <H1 size={76}>{s.title}</H1>
    </div>
    <div style={{ marginTop: 36 }}>
      <Body size={44}>{s.body}</Body>
    </div>
    <div
      style={{
        display: "flex",
        gap: 60,
        justifyContent: "center",
        margin: "50px 0 30px",
      }}
    >
      {["Clean model", "Poisoned model"].map((m, i) => (
        <div
          key={m}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ position: "relative", color: COLORS.ice }}>
            <Icon name="bot" size={150} strokeWidth={1.4} />
            {i === 1 ? (
              <div
                style={{
                  position: "absolute",
                  left: 58,
                  top: 80,
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  backgroundColor: COLORS.red,
                  boxShadow: `0 0 24px ${COLORS.red}`,
                }}
              />
            ) : null}
          </div>
          <div
            style={{ fontFamily: FONTS.sans, fontSize: 34, color: COLORS.text }}
          >
            {m}
          </div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: 40,
              color: COLORS.green,
            }}
          >
            PASS ✓
          </div>
        </div>
      ))}
    </div>
    <Body size={46}>
      <b style={{ color: COLORS.amber }}>{s.punch}</b>
    </Body>
    <Source text={s.source} />
  </>
);

export const Checklist: React.FC<SlideProps> = ({ s }) => (
  <>
    <H1 size={84}>{s.title}</H1>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        marginTop: 40,
      }}
    >
      {s.items.map((it: string) => (
        <div
          key={it}
          style={{ display: "flex", alignItems: "center", gap: 26 }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              flexShrink: 0,
              borderRadius: 16,
              border: `4px solid ${COLORS.green}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: COLORS.green,
            }}
          >
            <Icon name="check" size={52} strokeWidth={3} />
          </div>
          <Body size={46}>{it}</Body>
        </div>
      ))}
      {[4, 5, 6, 7].map((n) => (
        <div
          key={n}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            opacity: 0.35,
          }}
        >
          <div
            style={{
              width: 76,
              height: 52,
              flexShrink: 0,
              borderRadius: 12,
              border: `4px dashed ${COLORS.muted}`,
            }}
          />
          <div
            style={{
              height: 22,
              width: 500 - n * 40,
              borderRadius: 11,
              backgroundColor: COLORS.muted,
            }}
          />
        </div>
      ))}
    </div>
    <div
      style={{
        marginTop: "auto",
        alignSelf: "flex-start",
        padding: "16px 26px",
        borderRadius: 16,
        border: `2px dashed ${COLORS.green}`,
        fontFamily: FONTS.sans,
        fontWeight: 700,
        fontSize: 42,
        color: COLORS.green,
      }}
    >
      {s.more}
    </div>
  </>
);

export const Cta: React.FC<SlideProps> = ({ s, meta }) => (
  <>
    <H1 size={84}>{s.title}</H1>
    <div style={{ marginTop: 18 }}>
      <Body size={40}>{s.sub}</Body>
    </div>
    <div
      style={{ display: "flex", alignItems: "center", gap: 46, marginTop: 44 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            padding: 18,
            borderRadius: 24,
            backgroundColor: "white",
            boxShadow: `0 0 60px ${COLORS.red}66`,
          }}
        >
          <QrCode value={meta.videoUrl} size={330} />
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: 4,
            color: COLORS.ice,
          }}
        >
          {s.scan}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <WatchPill label="▶ YouTube" url={meta.videoUrlShort} size={40} />
        <div>
          <div
            style={{
              fontFamily: FONTS.sans,
              fontWeight: 700,
              fontSize: 34,
              color: COLORS.green,
            }}
          >
            {s.consult}
          </div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 22,
              whiteSpace: "nowrap",
              color: COLORS.text,
            }}
          >
            {meta.consultUrl}
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Icon name="users" size={44} color={COLORS.amber} />
      <Body size={36}>
        <b style={{ color: COLORS.amber }}>{s.save}</b>
      </Body>
    </div>
  </>
);

export const SLIDE_KINDS: Record<
  string,
  {
    Cmp: React.FC<SlideProps>;
    mood?: "cool" | "violet" | "hope";
    heat?: number;
  }
> = {
  cover: { Cmp: Cover, mood: "hope", heat: 0.3 },
  night: { Cmp: Night, heat: 0.8 },
  numbers: { Cmp: Numbers, heat: 0.5 },
  pivot: { Cmp: Pivot },
  failures: { Cmp: Failures, heat: 0.2 },
  mirror: { Cmp: Mirror },
  agent: { Cmp: Agent, mood: "violet", heat: 0.3 },
  poison: { Cmp: Poison, mood: "violet" },
  checklist: { Cmp: Checklist, mood: "hope" },
  cta: { Cmp: Cta, mood: "hope", heat: 0.2 },
};
