import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// ── Fonts injected once ──────────────────────────────────────────────────────
const NexusFonts = () => {
  useEffect(() => {
    if (document.getElementById('nexus-fonts')) return;
    const link = document.createElement('link');
    link.id = 'nexus-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
  }, []);
  return null;
};

// ── Design tokens — Performa BI palette ─────────────────────────────────────
const C = {
  dark:    '#02040a',
  slate:   '#0a0f1c',
  navy:    '#0A1929',
  teal:    '#088f8f',
  tealDk:  '#086086',
  tealLt:  '#0eb8b8',
  text:    '#f8fafc',
  muted:   '#8b949e',
  border:  'rgba(255,255,255,0.08)',
  tBorder: 'rgba(8,143,143,0.2)',
  glass:   'rgba(10,15,28,0.7)',
};

const serif  = "'Playfair Display', Georgia, serif";
const mono   = "'JetBrains Mono', 'Courier New', monospace";
const sansFt = "'Inter', sans-serif";

const glassPanel = {
  background:           C.glass,
  backdropFilter:       'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border:               `1px solid ${C.border}`,
};

// ── Utility components ───────────────────────────────────────────────────────
const Label = ({ children }) => (
  <span style={{
    fontFamily: mono, fontSize: '0.65rem', fontWeight: 600,
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: C.teal, display: 'block', marginBottom: '1rem',
  }}>
    {children}
  </span>
);

const SectionDivider = () => (
  <div style={{
    width: '4rem', height: '2px', margin: '1.5rem auto 0',
    background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)`,
    borderRadius: '2px',
  }} />
);

// ── Intro Screen: NEXUS Title with green scroll indicator ────────────────────
const NexusHeroIntro = ({ progress, t }) => {
  const opacity = Math.max(0, 1 - progress * 1.5);
  const translateY = -progress * 80;
  const scale = 1 - progress * 0.08;

  if (progress >= 0.95) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        opacity,
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        transition: 'opacity 0.15s ease-out',
      }}
    >
      <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
        <span
          style={{
            fontFamily: mono,
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: C.teal,
            display: 'block',
            marginBottom: '1.25rem',
            fontWeight: 500,
          }}
        >
          {t('nx_hero_tag')}
        </span>

        <h1
          style={{
            fontFamily: serif,
            fontWeight: 500,
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            letterSpacing: '0.22em',
            color: C.text,
            lineHeight: 1,
            margin: '0 0 1.5rem 0',
            textShadow: '0 0 80px rgba(8,143,143,0.25)',
          }}
        >
          NEXUS.
        </h1>

        <p
          style={{
            fontFamily: sansFt,
            color: C.muted,
            fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
            fontWeight: 300,
            letterSpacing: '0.04em',
            maxWidth: '32rem',
            margin: '0 auto 3rem auto',
            lineHeight: 1.6,
          }}
        >
          {t('nx_hero_sub')}
        </p>

        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <span
            style={{
              fontFamily: mono,
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.teal,
              fontWeight: 600,
            }}
          >
            {t('nx_scroll_down')}
          </span>
          <div
            style={{
              width: '1px',
              height: '2.5rem',
              background: `linear-gradient(to bottom, ${C.teal}, transparent)`,
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ── Multi-Layer Architecture Diagram (3 Columns, Top-to-Bottom Flow) ─────────
const ArchDiagram = ({ t }) => {
  const layers = [
    {
      stage: t('nx_l1_stage'),
      title: t('nx_l1_title'),
      desc: t('nx_l1_desc'),
      items: [
        {
          title: t('nx_l1_i1_t'),
          detail: t('nx_l1_i1_d'),
        },
        {
          title: t('nx_l1_i2_t'),
          detail: t('nx_l1_i2_d'),
        },
        {
          title: t('nx_l1_i3_t'),
          detail: t('nx_l1_i3_d'),
        },
      ],
    },
    {
      stage: t('nx_l2_stage'),
      title: t('nx_l2_title'),
      desc: t('nx_l2_desc'),
      items: [
        {
          title: t('nx_l2_i1_t'),
          detail: t('nx_l2_i1_d'),
        },
        {
          title: t('nx_l2_i2_t'),
          detail: t('nx_l2_i2_d'),
        },
        {
          title: t('nx_l2_i3_t'),
          detail: t('nx_l2_i3_d'),
        },
      ],
    },
    {
      stage: t('nx_l3_stage'),
      title: t('nx_l3_title'),
      desc: t('nx_l3_desc'),
      items: [
        {
          title: t('nx_l3_i1_t'),
          detail: t('nx_l3_i1_d'),
        },
        {
          title: t('nx_l3_i2_t'),
          detail: t('nx_l3_i2_d'),
        },
        {
          title: t('nx_l3_i3_t'),
          detail: t('nx_l3_i3_d'),
        },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {layers.map((layer, lIndex) => (
        <div key={layer.stage} style={{ position: 'relative' }}>
          {/* Layer Header */}
          <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.8rem' }}>
            <span
              style={{
                fontFamily: mono,
                fontSize: '0.65rem',
                fontWeight: 600,
                color: C.teal,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.2rem 0.6rem',
                background: 'rgba(8,143,143,0.12)',
                borderRadius: '4px',
                border: '1px solid rgba(8,143,143,0.25)',
              }}
            >
              {layer.stage}
            </span>
            <h4
              style={{
                fontFamily: serif,
                fontSize: '1.25rem',
                fontWeight: 500,
                color: C.text,
                margin: 0,
              }}
            >
              {layer.title}
            </h4>
            <span
              style={{
                fontFamily: sansFt,
                fontSize: '0.85rem',
                color: C.muted,
                fontWeight: 300,
              }}
            >
              {layer.desc}
            </span>
          </div>

          {/* 3 Columns Grid for this layer */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {layer.items.map((item, iIndex) => (
              <div
                key={iIndex}
                style={{
                  ...glassPanel,
                  borderColor: 'rgba(8,143,143,0.18)',
                  borderRadius: '8px',
                  padding: '1.5rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
              >
                <div
                  style={{
                    width: '1.75rem',
                    height: '2px',
                    background: C.teal,
                    marginBottom: '1rem',
                    borderRadius: '1px',
                  }}
                />
                <h5
                  style={{
                    fontFamily: sansFt,
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: C.text,
                    margin: '0 0 0.6rem 0',
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h5>
                <p
                  style={{
                    fontFamily: sansFt,
                    fontSize: '0.82rem',
                    color: C.muted,
                    margin: 0,
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Downward Flow Connector to Next Layer */}
          {lIndex < layers.length - 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem 0 0.5rem 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.2rem',
                }}
              >
                <div
                  style={{
                    width: '1px',
                    height: '1.5rem',
                    background: `linear-gradient(to bottom, ${C.teal}, rgba(8,143,143,0.3))`,
                  }}
                />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ── Pillar Card ───────────────────────────────────────────────────────────────
const PillarCard = ({ num, title, body }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...glassPanel,
        padding: '2.5rem',
        borderColor: hovered ? C.teal : C.border,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 8px 32px rgba(8,143,143,0.12)` : 'none',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: mono, fontSize: '0.65rem', fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.12em',
        color: hovered ? C.teal : C.muted,
        borderBottom: `1px solid ${C.border}`,
        paddingBottom: '0.5rem', marginBottom: '1.5rem',
        display: 'block', transition: 'color 0.3s',
      }}>
        {num}
      </span>
      <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: '1.2rem', color: C.text, marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', color: C.muted, fontWeight: 300, lineHeight: 1.75 }}>{body}</p>
    </div>
  );
};

// ── Governance Card ───────────────────────────────────────────────────────────
const GovCard = ({ icon, title, strong, body }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...glassPanel,
        padding: '2.5rem',
        borderColor: hovered ? C.teal : C.border,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 8px 32px rgba(8,143,143,0.1)` : 'none',
      }}
    >
      <div style={{
        width: '2.75rem', height: '2.75rem', borderRadius: '8px',
        border: `1px solid ${C.tBorder}`,
        background: 'rgba(8,143,143,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.5rem',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: '1.2rem', color: C.text, marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', color: C.muted, fontWeight: 300, lineHeight: 1.75 }}>
        <strong style={{ color: C.text, display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>{strong}</strong>
        {body}
      </p>
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function NexusPage() {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const progress       = Math.min(scrollY / 650, 1);
  const blurAmount     = Math.max(0, 16 - progress * 16);
  const contentOpacity = 0.25 + progress * 0.75;

  return (
    <div style={{ background: C.dark, color: C.text, fontFamily: sansFt, overflowX: 'hidden', minHeight: '100vh' }}>
      <NexusFonts />

      {/* Hero Intro overlay with NEXUS title and green scroll indicator */}
      <NexusHeroIntro progress={progress} t={t} />

      {/* Content layer */}
      <div style={{
        filter: `blur(${blurAmount}px)`,
        opacity: contentOpacity,
        transition: 'filter 0.08s ease-out, opacity 0.08s ease-out',
        position: 'relative', zIndex: 10,
      }}>

        {/* Scroll spacer for animation */}
        <div style={{ height: '65vh' }} />

        {/* ── CONTEXT ──────────────────────────────────────── */}
        <section id="nx-context" style={{ padding: '5rem 1.5rem 7rem', maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ maxWidth: '56rem' }}>
            <Label>{t('nx_ctx_tag')}</Label>
            <h2 style={{
              fontFamily: serif, fontWeight: 500,
              fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', lineHeight: 1.1,
              marginBottom: '1.5rem', color: C.text,
            }}>
              {t('nx_ctx_title_1')}<br />
              <span style={{ color: C.muted, fontStyle: 'italic' }}>{t('nx_ctx_title_2')}</span>
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
              gap: '3rem', marginTop: '3.5rem',
            }}>
              <p style={{
                fontSize: '1.0625rem', color: C.muted, fontWeight: 300,
                lineHeight: 1.8,
                borderLeft: `2px solid ${C.teal}`,
                paddingLeft: '1.25rem',
              }}>
                {t('nx_ctx_p1')}
              </p>
              <p style={{ fontSize: '1.0625rem', color: C.muted, fontWeight: 300, lineHeight: 1.8 }}>
                {t('nx_ctx_p2')}
              </p>
            </div>
          </div>
        </section>

        {/* ── VALUE / THE LENS ─────────────────────────────── */}
        <section id="nx-value" style={{
          padding: '7rem 1.5rem',
          background: C.slate,
          borderTop: `1px solid ${C.border}`,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '45rem', height: '45rem',
            background: `rgba(8,143,143,0.05)`,
            borderRadius: '50%', filter: 'blur(100px)',
            pointerEvents: 'none',
          }} aria-hidden="true" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '4.5rem', maxWidth: '48rem' }}>
              <Label>{t('nx_lens_tag')}</Label>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.2, marginBottom: '1.25rem', color: C.text }}>
                {t('nx_lens_title_1')}<br />{t('nx_lens_title_2')}
              </h2>
              <p style={{ color: C.muted, fontWeight: 300, fontSize: '1.0625rem', lineHeight: 1.75 }}>
                {t('nx_lens_sub')}
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '2rem' }}>
              <PillarCard
                num={t('nx_p1_num')}
                title={t('nx_p1_title')}
                body={t('nx_p1_body')}
              />
              <PillarCard
                num={t('nx_p2_num')}
                title={t('nx_p2_title')}
                body={t('nx_p2_body')}
              />
              <PillarCard
                num={t('nx_p3_num')}
                title={t('nx_p3_title')}
                body={t('nx_p3_body')}
              />
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE DIAGRAM ─────────────────────────── */}
        <section id="nx-tech" style={{
          padding: '7rem 1.5rem',
          borderTop: `1px solid ${C.border}`,
        }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <Label>{t('nx_arch_tag')}</Label>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.2, color: C.text }}>
                {t('nx_arch_title')}
              </h2>
              <p style={{ color: C.muted, fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, maxWidth: '36rem', margin: '1rem auto 0' }}>
                {t('nx_arch_sub')}
              </p>
              <SectionDivider />
            </div>

            {/* Architecture diagram */}
            <div style={{
              ...glassPanel,
              borderColor: C.tBorder,
              borderRadius: '12px',
              padding: '2.5rem 2rem',
            }}>
              <ArchDiagram t={t} />
            </div>
          </div>
        </section>

        {/* ── GOVERNANCE ───────────────────────────────────── */}
        <section id="nx-objections" style={{
          padding: '7rem 1.5rem',
          background: C.slate,
          borderTop: `1px solid ${C.border}`,
        }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <Label>{t('nx_gov_tag')}</Label>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.2, color: C.text, marginBottom: '1rem' }}>
                {t('nx_gov_title')}
              </h2>
              <p style={{ color: C.muted, fontWeight: 300, fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '40rem', margin: '0 auto' }}>
                {t('nx_gov_sub')}
              </p>
              <SectionDivider />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '2rem' }}>
              <GovCard
                icon={<><circle cx="12" cy="12" r="3"/><path d="M2 12h3M19 12h3M12 2v3M12 19v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>}
                title={t('nx_gov1_title')}
                strong={t('nx_gov1_strong')}
                body={t('nx_gov1_body')}
              />
              <GovCard
                icon={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>}
                title={t('nx_gov2_title')}
                strong={t('nx_gov2_strong')}
                body={t('nx_gov2_body')}
              />
              <GovCard
                icon={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}
                title={t('nx_gov3_title')}
                strong={t('nx_gov3_strong')}
                body={t('nx_gov3_body')}
              />
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <footer style={{
          padding: '7rem 1.5rem',
          textAlign: 'center',
          borderTop: `1px solid ${C.border}`,
          background: C.dark,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40rem', height: '40rem',
            background: `rgba(8,143,143,0.06)`,
            borderRadius: '50%', filter: 'blur(80px)',
            pointerEvents: 'none',
          }} aria-hidden="true" />

          <div style={{ maxWidth: '44rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              width: '4rem', height: '4rem', borderRadius: '50%',
              background: 'rgba(8,143,143,0.1)',
              border: `1px solid ${C.tBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: `0 0 32px rgba(8,143,143,0.2)`,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>

            <h2 style={{
              fontFamily: serif, fontWeight: 500,
              fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2,
              color: C.text, marginBottom: '1.5rem',
            }}>
              {t('nx_cta_title')}
            </h2>
            <p style={{ color: C.muted, fontWeight: 300, fontSize: '1rem', lineHeight: 1.75, marginBottom: '3rem' }}>
              {t('nx_cta_sub')}
            </p>
            <a
              href="mailto:contato@performabi.com?subject=Nexus%20-%20Executive%20Diagnostic"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                fontFamily: mono, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                fontWeight: 600,
                background: C.text, color: C.dark,
                padding: '1.25rem 2.5rem',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'background 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.teal;
                e.currentTarget.style.color = C.text;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(8,143,143,0.3)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.text;
                e.currentTarget.style.color = C.dark;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>{t('nx_cta_btn')}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div style={{
            marginTop: '6rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${C.border}`,
            fontFamily: mono, fontSize: '0.65rem',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            color: C.muted,
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'space-between', alignItems: 'center',
            maxWidth: '80rem', margin: '6rem auto 0',
            gap: '1rem',
          }}>
            <p>Copyright {new Date().getFullYear()} {t('nx_footer_copy')}</p>
            <p style={{ opacity: 0.5 }}>{t('nx_footer_local')}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
