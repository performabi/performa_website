import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// ── Smooth Scroll Observer Hook ─────────────────────────────────────────────
const useScrollAnimation = () => {
    const ref = useRef(null);
    const [style, setStyle] = useState({
        opacity: 0,
        transform: 'translateY(40px)',
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const { top, height } = ref.current.getBoundingClientRect();
            const screenHeight = window.innerHeight;
            if (height === 0) return;

            const progress = Math.max(0, Math.min(1, (screenHeight - top) / (height * 0.75)));
            setStyle({
                opacity: progress,
                transform: `translateY(${40 * (1 - progress)}px)`,
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { ref, style };
};

const AnimatedSection = ({ children, id, className = '' }) => {
    const { ref, style } = useScrollAnimation();
    return (
        <section id={id} className={`py-24 md:py-32 relative ${className}`}>
            <div ref={ref} style={{ ...style, transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                {children}
            </div>
        </section>
    );
};

// ── Organic Ambient Atmosphere (Glassmorphism & Depth Orbs) ──────────────────
const SmokeBackground = ({ variant = 'dark' }) => {
    const bg = variant === 'darker' ? '#0D1117' : '#0A1929';
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
                className="smoke-orb"
                style={{
                    width: '650px',
                    height: '650px',
                    background: 'radial-gradient(circle, rgba(8,143,143,0.22) 0%, rgba(8,143,143,0.03) 65%, transparent 100%)',
                    top: '-15%',
                    left: '-10%',
                }}
            />
            <div
                className="smoke-orb smoke-orb-2"
                style={{
                    width: '550px',
                    height: '550px',
                    background: 'radial-gradient(circle, rgba(8,96,134,0.2) 0%, rgba(8,96,134,0.03) 60%, transparent 100%)',
                    top: '35%',
                    right: '-8%',
                }}
            />
            <div
                className="smoke-orb smoke-orb-3"
                style={{
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, rgba(14,184,184,0.14) 0%, transparent 70%)',
                    bottom: '5%',
                    left: '25%',
                }}
            />
            <div className="absolute inset-0 mesh-grid opacity-40" />
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, transparent, ${bg})` }}
            />
        </div>
    );
};

// ── 1. HERO: The High-Stakes Reality ──────────────────────────────────────────
const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#0A1929] text-white -mt-20 overflow-hidden pt-28 pb-16">
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div
                    className="smoke-orb"
                    style={{
                        width: '950px',
                        height: '950px',
                        background: 'radial-gradient(circle, rgba(8,143,143,0.25) 0%, rgba(8,143,143,0.05) 55%, transparent 80%)',
                        top: '-320px',
                        left: '-220px',
                    }}
                />
                <div
                    className="smoke-orb smoke-orb-2"
                    style={{
                        width: '750px',
                        height: '750px',
                        background: 'radial-gradient(circle, rgba(8,96,134,0.22) 0%, rgba(8,96,134,0.04) 60%, transparent 80%)',
                        top: '15%',
                        right: '-200px',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(8,143,143,0.05) 0%, transparent 40%, rgba(13,17,23,0.8) 100%)',
                    }}
                />
                <div className="absolute inset-0 mesh-grid opacity-50" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                <div className="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full mb-8 animate-fade-in-down border border-[#088f8f]/30">
                    <span className="w-2 h-2 rounded-full bg-[#088f8f] animate-pulse-slow inline-block shadow-[0_0_8px_#088f8f]" />
                    <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wider uppercase">
                        {t('hero_pill')}
                    </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.12] mb-6 animate-fade-in-down tracking-tight">
                    {t('hero_title_1')}{' '}
                    <br className="hidden sm:inline" />
                    <span
                        className="text-glow-teal"
                        style={{
                            background: 'linear-gradient(135deg, #088f8f 0%, #0eb8b8 45%, #ffffff 80%, #086086 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {t('hero_title_2')}
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed font-light">
                    {t('hero_sub')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
                    <a
                        href="https://calendar.app.google/QoA7M3QwtSBQAPtu5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group inline-flex items-center justify-center gap-3 font-semibold py-4 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-[1.02] text-white overflow-hidden w-full sm:w-auto"
                        style={{
                            background: 'linear-gradient(135deg, #088f8f 0%, #086086 100%)',
                            boxShadow: '0 4px 24px rgba(8,143,143,0.4), 0 0 0 1px rgba(8,143,143,0.3)',
                        }}
                    >
                        <span className="relative z-10">{t('hero_cta')}</span>
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        <span
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
                        />
                    </a>
                    <a
                        href="#solutions"
                        className="inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-xl text-gray-300 hover:text-white font-medium text-base transition-all duration-300 hover:border-[#088f8f]/50 w-full sm:w-auto"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {t('hero_explore')}
                    </a>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-700">
                    {[
                        { value: t('stat_truth_title'), label: t('stat_truth_desc') },
                        { value: t('stat_velocity_title'), label: t('stat_velocity_desc') },
                        { value: t('stat_margin_title'), label: t('stat_margin_desc') },
                    ].map((stat, i) => (
                        <div key={i} className="glass rounded-xl p-4 md:p-5 text-center border border-white/5 hover:border-[#088f8f]/30 transition-colors">
                            <div className="text-base md:text-xl font-bold" style={{ color: '#0eb8b8' }}>{stat.value}</div>
                            <div className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #0A1929)' }}
                aria-hidden="true"
            />
        </section>
    );
};

// ── 2. THE DIAGNOSIS: Confronting the Real Operational Pains ──────────────────
const PainAgitationSection = () => {
    const { t } = useLanguage();

    const pains = [
        {
            tag: t('pain1_tag'),
            title: t('pain1_title'),
            quote: t('pain1_quote'),
            body: t('pain1_body'),
            cost: t('pain1_cost'),
        },
        {
            tag: t('pain2_tag'),
            title: t('pain2_title'),
            quote: t('pain2_quote'),
            body: t('pain2_body'),
            cost: t('pain2_cost'),
        },
        {
            tag: t('pain3_tag'),
            title: t('pain3_title'),
            quote: t('pain3_quote'),
            body: t('pain3_body'),
            cost: t('pain3_cost'),
        },
    ];

    return (
        <AnimatedSection id="pains" className="bg-[#0A1929]">
            <SmokeBackground variant="dark" />
            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-widest text-[#088f8f] font-semibold block mb-3">
                        {t('pains_tag')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {t('pains_title')}
                    </h2>
                    <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed font-light">
                        {t('pains_sub')}
                    </p>
                    <div className="mt-6 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {pains.map((p, idx) => (
                        <div
                            key={idx}
                            className="glass-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                            style={{
                                background: 'rgba(13,17,23,0.7)',
                                border: '1px solid rgba(255,255,255,0.07)',
                            }}
                        >
                            <div>
                                <span className="text-[11px] font-mono tracking-widest uppercase text-[#088f8f] block mb-3 font-semibold">
                                    {p.tag}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-xs italic text-gray-400 border-l-2 border-[#088f8f]/40 pl-3 my-4 leading-relaxed">
                                    {p.quote}
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                                    {p.body}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#0eb8b8] font-medium">
                                <span>Impact:</span>
                                <span className="text-gray-300 font-normal">{p.cost}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

// ── 3. UNIFIED 4-TIER CAROUSEL (Scroll-Driven Horizontal Experience) ──────────
const UnifiedSolutionsCarousel = () => {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const { t } = useLanguage();

    const solutions = [
        {
            stage: t('t1_stage'),
            title: t('t1_title'),
            focus: t('t1_focus'),
            badge: t('t1_badge'),
            accent: '#088f8f',
            painAddressed: t('t1_pain'),
            operationalGoal: t('t1_goal'),
            deliverables: [t('t1_d1'), t('t1_d2'), t('t1_d3')],
            cta: t('t1_cta'),
            href: '/bihealthcheck',
            isInternal: true,
        },
        {
            stage: t('t2_stage'),
            title: t('t2_title'),
            focus: t('t2_focus'),
            badge: t('t2_badge'),
            accent: '#0eb8b8',
            highlight: true,
            painAddressed: t('t2_pain'),
            operationalGoal: t('t2_goal'),
            deliverables: [t('t2_d1'), t('t2_d2'), t('t2_d3')],
            cta: t('t2_cta'),
            href: 'https://calendar.app.google/QoA7M3QwtSBQAPtu5',
            isInternal: false,
        },
        {
            stage: t('t3_stage'),
            title: t('t3_title'),
            focus: t('t3_focus'),
            badge: t('t3_badge'),
            accent: '#088f8f',
            painAddressed: t('t3_pain'),
            operationalGoal: t('t3_goal'),
            deliverables: [t('t3_d1'), t('t3_d2'), t('t3_d3')],
            cta: t('t3_cta'),
            href: 'https://calendar.app.google/QoA7M3QwtSBQAPtu5',
            isInternal: false,
        },
        {
            stage: t('t4_stage'),
            title: t('t4_title'),
            focus: t('t4_focus'),
            badge: t('t4_badge'),
            accent: '#10b981',
            isNexus: true,
            painAddressed: t('t4_pain'),
            operationalGoal: t('t4_goal'),
            deliverables: [t('t4_d1'), t('t4_d2'), t('t4_d3')],
            cta: t('t4_cta'),
            href: '/nexus',
            isInternal: true,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
            if (totalScrollableHeight <= 0) return;

            const currentScroll = -rect.top;
            const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const maxTranslate = 74;
    const currentTranslateX = scrollProgress * maxTranslate;
    const activeIndex = Math.min(3, Math.floor(scrollProgress * 3.99));

    return (
        <section
            id="solutions"
            ref={containerRef}
            className="relative bg-[#0D1117] text-white"
            style={{ height: '320vh' }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 md:py-16">
                <SmokeBackground variant="darker" />

                <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#088f8f]" />
                            <span className="text-xs uppercase font-mono tracking-widest text-[#088f8f] font-semibold">
                                {t('solutions_tag')}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            {t('solutions_title')}
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl font-light">
                            {t('solutions_sub')}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 bg-[#0A1929]/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 self-start md:self-auto">
                        {solutions.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (!containerRef.current) return;
                                    const top = containerRef.current.offsetTop;
                                    const total = containerRef.current.offsetHeight - window.innerHeight;
                                    window.scrollTo({
                                        top: top + (idx / 3) * total,
                                        behavior: 'smooth',
                                    });
                                }}
                                className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-300 ${
                                    activeIndex === idx
                                        ? 'bg-[#088f8f] text-white font-bold shadow-[0_0_12px_rgba(8,143,143,0.5)]'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                0{idx + 1}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 w-full overflow-hidden my-auto py-4">
                    <div
                        className="flex gap-6 md:gap-8 items-stretch px-6 md:px-16"
                        style={{
                            transform: `translate3d(-${currentTranslateX}%, 0, 0)`,
                            transition: 'transform 0.08s ease-out',
                            willChange: 'transform',
                            width: 'max-content',
                        }}
                    >
                        {solutions.map((item, idx) => (
                            <div
                                key={idx}
                                className={`w-[82vw] sm:w-[68vw] lg:w-[48vw] xl:w-[42vw] shrink-0 rounded-3xl p-7 md:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                                    item.isNexus
                                        ? 'border-[#10b981]/50 shadow-[0_12px_45px_rgba(16,185,129,0.15)]'
                                        : item.highlight
                                        ? 'border-[#088f8f]/60 shadow-[0_12px_45px_rgba(8,143,143,0.2)]'
                                        : 'border-white/10 hover:border-[#088f8f]/40'
                                }`}
                                style={{
                                    background: item.isNexus
                                        ? 'linear-gradient(155deg, rgba(16,185,129,0.1) 0%, rgba(10,15,28,0.92) 55%)'
                                        : item.highlight
                                        ? 'linear-gradient(155deg, rgba(8,143,143,0.14) 0%, rgba(13,17,23,0.92) 55%)'
                                        : 'rgba(10,25,41,0.7)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                }}
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span
                                            className="text-[11px] font-mono tracking-widest uppercase font-semibold px-2.5 py-0.5 rounded-full"
                                            style={{
                                                background: item.isNexus ? 'rgba(16,185,129,0.15)' : 'rgba(8,143,143,0.15)',
                                                color: item.isNexus ? '#10b981' : '#0eb8b8',
                                                border: `1px solid ${item.isNexus ? 'rgba(16,185,129,0.3)' : 'rgba(8,143,143,0.3)'}`,
                                            }}
                                        >
                                            {item.stage}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">
                                            {item.badge}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-2xl md:text-3xl font-bold text-white mb-1.5"
                                        style={item.isNexus ? { fontFamily: "'Playfair Display', Georgia, serif" } : {}}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-medium mb-6" style={{ color: item.accent }}>
                                        {item.focus}
                                    </p>

                                    <div className="space-y-3.5 mb-6">
                                        <div className="glass-light p-3.5 rounded-xl border border-white/5">
                                            <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">
                                                {t('lbl_friction')}
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                                                {item.painAddressed}
                                            </p>
                                        </div>

                                        <div className="glass-light p-3.5 rounded-xl border border-white/5">
                                            <p className="text-[10px] font-mono uppercase tracking-wider text-[#0eb8b8] font-bold mb-1">
                                                {t('lbl_goal')}
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                                                {item.operationalGoal}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold mb-2">
                                            {t('lbl_deliverables')}
                                        </p>
                                        <ul className="space-y-1.5">
                                            {item.deliverables.map((del, dIdx) => (
                                                <li key={dIdx} className="text-xs text-gray-300 flex items-start gap-2 font-light">
                                                    <span style={{ color: item.accent }}>✦</span>
                                                    <span>{del}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                                    {item.isInternal ? (
                                        <Link
                                            to={item.href}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group hover:gap-3"
                                        >
                                            <span style={{ color: item.accent }}>{item.cta}</span>
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group hover:gap-3"
                                        >
                                            <span style={{ color: item.accent }}>{item.cta}</span>
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </a>
                                    )}

                                    <span className="text-[11px] font-mono text-gray-500">
                                        0{idx + 1} / 04
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-6 max-w-7xl flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span className="hidden sm:inline">
                        {t('scroll_cue')}
                    </span>
                    <div className="flex items-center gap-3">
                        <span>{t('scroll_prog')}:</span>
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#088f8f] transition-all duration-100 rounded-full"
                                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── 4. PROOF OF WORK: Measurable Real-World Turnarounds ──────────────────────
const PortfolioSection = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: t('cs1_title'),
            client: t('cs1_client'),
            challenge: t('cs1_challenge'),
            solution: t('cs1_solution'),
            result: t('cs1_result'),
            imageUrl: '/Dash1.png',
        },
        {
            title: t('cs2_title'),
            client: t('cs2_client'),
            challenge: t('cs2_challenge'),
            solution: t('cs2_solution'),
            result: t('cs2_result'),
            imageUrl: '/Dash2.png',
        },
    ];

    return (
        <AnimatedSection id="portfolio" className="bg-[#0A1929]">
            <SmokeBackground variant="dark" />
            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-widest text-[#088f8f] font-semibold block mb-3">
                        {t('port_tag')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {t('port_title')}
                    </h2>
                    <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed font-light">
                        {t('port_sub')}
                    </p>
                    <div className="mt-6 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
                </div>

                <div className="space-y-24">
                    {projects.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                <span className="text-xs font-mono text-[#088f8f] uppercase tracking-wider block mb-2">
                                    Case Study 0{index + 1}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-semibold text-gray-400 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#088f8f]" />
                                    {item.client}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="glass-light p-4 rounded-xl border border-white/5">
                                        <p className="text-[11px] font-mono text-[#088f8f] uppercase font-bold mb-1">{t('lbl_friction_cs')}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed font-light">{item.challenge}</p>
                                    </div>
                                    <div className="glass-light p-4 rounded-xl border border-white/5">
                                        <p className="text-[11px] font-mono text-[#088f8f] uppercase font-bold mb-1">{t('lbl_solution_cs')}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed font-light">{item.solution}</p>
                                    </div>
                                </div>

                                <div
                                    className="rounded-xl p-5"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(8,143,143,0.18) 0%, rgba(8,96,134,0.12) 100%)',
                                        border: '1px solid rgba(8,143,143,0.3)',
                                    }}
                                >
                                    <p className="text-xs font-mono uppercase tracking-wider text-[#0eb8b8] font-bold mb-1">{t('lbl_outcome_cs')}</p>
                                    <p className="text-white text-base md:text-lg font-bold leading-snug">{item.result}</p>
                                </div>
                            </div>

                            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                                <div
                                    className="relative rounded-2xl overflow-hidden group shadow-2xl"
                                    style={{ border: '1px solid rgba(8,143,143,0.2)' }}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-30"
                                        style={{ background: 'linear-gradient(135deg, rgba(8,143,143,0.15) 0%, transparent 60%)' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

// ── 5. THE PROCESS: Predictable 3-Step Engagement ─────────────────────────────
const ProcessSection = () => {
    const { t } = useLanguage();

    const steps = [
        {
            num: '01',
            name: t('step1_title'),
            description: t('step1_desc'),
        },
        {
            num: '02',
            name: t('step2_title'),
            description: t('step2_desc'),
        },
        {
            num: '03',
            name: t('step3_title'),
            description: t('step3_desc'),
        },
    ];

    return (
        <AnimatedSection id="process" className="bg-[#0A1929]">
            <SmokeBackground variant="dark" />
            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-xs uppercase tracking-widest text-[#088f8f] font-semibold block mb-3">
                        {t('proc_tag')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {t('proc_title')}
                    </h2>
                    <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed font-light">
                        {t('proc_sub')}
                    </p>
                    <div className="mt-6 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
                </div>

                <div className="relative">
                    <div
                        className="hidden md:block absolute top-12 left-0 w-full h-px"
                        style={{
                            background: 'linear-gradient(90deg, transparent 8%, rgba(8,143,143,0.3) 30%, rgba(8,143,143,0.3) 70%, transparent 92%)',
                        }}
                        aria-hidden="true"
                    />
                    <div className="relative grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-8 text-center group transition-all duration-300 hover:-translate-y-2 border border-white/5"
                            >
                                <div className="relative mx-auto mb-6 w-16 h-16">
                                    <div
                                        className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-75 transition-opacity duration-300"
                                        style={{
                                            background: 'rgba(8,143,143,0.3)',
                                            filter: 'blur(10px)',
                                            transform: 'scale(1.2)',
                                        }}
                                    />
                                    <div
                                        className="relative flex items-center justify-center h-16 w-16 rounded-full border-2"
                                        style={{
                                            background: 'linear-gradient(135deg, #088f8f 0%, #086086 100%)',
                                            borderColor: 'rgba(8,143,143,0.5)',
                                            boxShadow: '0 4px 20px rgba(8,143,143,0.4)',
                                        }}
                                    >
                                        <span className="text-2xl font-bold text-white font-mono">{step.num}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

// ── 6. FINAL CALL TO ACTION: Reclaim Your Leadership Time ─────────────────────
const ContactSection = () => {
    const { t } = useLanguage();

    return (
        <AnimatedSection id="contact" className="bg-[#0D1117]">
            <div className="relative z-10 container mx-auto px-6 max-w-5xl">
                <div
                    className="rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(8,143,143,0.22) 0%, rgba(8,96,134,0.3) 50%, rgba(13,17,23,0.9) 100%)',
                        border: '1px solid rgba(8,143,143,0.35)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
                    }}
                >
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(8,143,143,0.3) 0%, transparent 70%)',
                            filter: 'blur(50px)',
                        }}
                        aria-hidden="true"
                    />

                    <span className="text-xs uppercase tracking-widest text-[#0eb8b8] font-semibold block mb-3">
                        {t('cta_tag')}
                    </span>
                    <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {t('cta_title')}
                    </h2>
                    <p className="relative text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        {t('cta_sub')}
                    </p>
                    <a
                        href="https://calendar.app.google/QoA7M3QwtSBQAPtu5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group inline-flex items-center gap-3 bg-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-2xl"
                        style={{ color: '#086086' }}
                    >
                        <span className="relative z-10">{t('cta_btn')}</span>
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};

// ── Master HomePage Export ───────────────────────────────────────────────────
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <PainAgitationSection />
            <UnifiedSolutionsCarousel />
            <PortfolioSection />
            <ProcessSection />
            <ContactSection />
        </>
    );
}
