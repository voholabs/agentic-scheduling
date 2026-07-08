import React from 'react';

// Voholabs auth hero. Self-contained (no external assets) so it stays crisp
// and CSP-safe. Palette + type follow the Voholabs design system:
// off-black #091717, paper #FBFAF4, turquoise #20808D, plex-blue #1FB8CD,
// apricot #FFD2A6, sky #B8DDE1, ecru #E4E3D4. Serif = Instrument Serif.
export const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[720px] mx-auto px-[40px] gap-[48px]">
      <HeroArt />

      <div className="text-center max-w-[520px]">
        <div
          className="uppercase"
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#1FB8CD',
          }}
        >
          Voholabs Studio
        </div>

        <h1
          style={{
            fontFamily: 'Instrument Serif, Times New Roman, serif',
            fontWeight: 400,
            fontSize: 52,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: '18px 0 0',
            color: '#FBFAF4',
            textWrap: 'balance',
          }}
        >
          Your whole social presence,{' '}
          <em style={{ fontStyle: 'italic', color: '#20808D' }}>
            run from one studio.
          </em>
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.5,
            color: 'rgba(251,250,244,0.62)',
            margin: '20px 0 0',
          }}
        >
          Plan, create and publish across every platform. Scheduled, tracked and
          shipped from a single place.
        </p>
      </div>
    </div>
  );
};

// Editorial "scheduling studio" illustration: a paper canvas of scheduled
// posts feeding a calendar rail, with the Voholabs mark as the anchor.
const HeroArt = () => {
  return (
    <svg
      width="440"
      height="360"
      viewBox="0 0 440 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Voholabs scheduling studio"
      style={{ width: '100%', maxWidth: 440, height: 'auto' }}
    >
      {/* soft glow */}
      <circle cx="300" cy="120" r="150" fill="#20808D" opacity="0.10" />
      <circle cx="120" cy="250" r="120" fill="#1FB8CD" opacity="0.08" />

      {/* paper canvas */}
      <rect
        x="40"
        y="46"
        width="270"
        height="268"
        rx="20"
        fill="#FBFAF4"
        transform="rotate(-3 40 46)"
      />
      <rect
        x="56"
        y="34"
        width="300"
        height="286"
        rx="22"
        fill="#FFFFFF"
      />

      {/* canvas header */}
      <circle cx="80" cy="62" r="5" fill="#20808D" />
      <rect x="94" y="57" width="120" height="10" rx="5" fill="#E4E3D4" />
      <rect x="300" y="55" width="40" height="14" rx="7" fill="#FFD2A6" />

      {/* scheduled post rows */}
      <PostRow y={92} dot="#1FB8CD" w={168} />
      <PostRow y={132} dot="#20808D" w={140} />
      <PostRow y={172} dot="#A84B2F" w={156} />
      <PostRow y={212} dot="#B8DDE1" w={126} />

      {/* calendar rail */}
      <rect x="252" y="90" width="84" height="196" rx="14" fill="#091717" />
      <rect x="266" y="104" width="40" height="8" rx="4" fill="rgba(251,250,244,0.5)" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={266 + c * 20}
            y={122 + r * 34}
            width="14"
            height="14"
            rx="4"
            fill={
              (r === 0 && c === 1) || (r === 2 && c === 2)
                ? '#20808D'
                : r === 1 && c === 0
                ? '#FFD2A6'
                : 'rgba(251,250,244,0.14)'
            }
          />
        ))
      )}

      {/* Voholabs mark, anchored bottom-left */}
      <g transform="translate(44 250)">
        <rect width="86" height="84" rx="18" fill="#091717" />
        <rect
          x="8"
          y="19"
          width="19"
          height="64"
          rx="9.5"
          transform="rotate(-29.714 8 19)"
          fill="#FAF9F5"
        />
        <circle cx="63" cy="25" r="11" fill="#20808D" />
      </g>
    </svg>
  );
};

const PostRow = ({ y, dot, w }: { y: number; dot: string; w: number }) => (
  <g>
    <circle cx="86" cy={y + 10} r="8" fill={dot} />
    <rect x="104" y={y} width={w} height="9" rx="4.5" fill="#E4E3D4" />
    <rect x="104" y={y + 15} width={w - 40} height="7" rx="3.5" fill="#F0EFE6" />
  </g>
);
