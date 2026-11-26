import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const location = useLocation();
  const isNexus = location.pathname === '/nexus';
  const { lang, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const nexusAccent = '#10b981';
  const tealAccent = '#088f8f';
  const accent = isNexus ? nexusAccent : tealAccent;
  const accentDark = isNexus ? '#0a9e6e' : '#086086';
  const bgScrolled = isNexus ? 'rgba(2,4,10,0.85)' : 'rgba(10,25,41,0.82)';

  const availableLangs = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'PT', label: 'Português', flag: '🇧🇷' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'border-b' : 'bg-transparent border-b border-transparent'
        }`}
        style={
          isScrolled
            ? {
                background: bgScrolled,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderColor: `${accent}26`,
                boxShadow: `0 4px 32px rgba(0,0,0,0.35), 0 1px 0 ${accent}14`,
              }
            : {}
        }
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / brand */}
          <div
            className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
            onClick={() => scrollToSection('hero')}
          >
            {isNexus ? (
              <div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    letterSpacing: '0.1em',
                    color: '#f8fafc',
                  }}
                >
                  NEXUS.
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: nexusAccent,
                    marginTop: '0.1rem',
                  }}
                >
                  {t('nexus_by')}
                </span>
              </div>
            ) : (
              <img src="/logo.png" alt="Performa BI Logo" className="h-7" />
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="flex items-center space-x-6 md:space-x-8">
            {/* Main site sections — only shown on non-Nexus pages */}
            {!isNexus && (
              <div className="hidden md:flex items-center space-x-7">
                {[
                  { id: 'solutions', label: t('nav_services') },
                  { id: 'portfolio', label: t('nav_portfolio') },
                  { id: 'process', label: t('nav_process') },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="capitalize text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide relative group"
                  >
                    {item.label}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                      style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})` }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Nexus internal links if on Nexus page */}
            {isNexus && (
              <div className="hidden md:flex items-center gap-5 text-xs font-mono uppercase tracking-widest text-[#8b949e]">
                <a
                  href="#nx-context"
                  className="hover:text-[#10b981] transition-colors"
                >
                  {t('nexus_context')}
                </a>
                <a
                  href="#nx-value"
                  className="hover:text-[#10b981] transition-colors"
                >
                  {t('nexus_lens')}
                </a>
                <a
                  href="#nx-tech"
                  className="hover:text-[#10b981] transition-colors"
                >
                  {t('nexus_ai')}
                </a>
                <a
                  href="#nx-objections"
                  className="hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded hover:border-[#10b981]"
                >
                  {t('nexus_answers')}
                </a>
              </div>
            )}

            {/* Nexus badge link on normal pages */}
            {!isNexus && (
              <Link
                to="/nexus"
                className="relative group text-sm tracking-wide transition-colors duration-300 hidden sm:inline-flex items-center gap-1.5 text-gray-400 hover:text-white"
              >
                <span>Nexus</span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    padding: '0.1rem 0.35rem',
                    borderRadius: '3px',
                    background: 'rgba(16,185,129,0.15)',
                    color: nexusAccent,
                    border: '1px solid rgba(16,185,129,0.3)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('nav_nexus_new')}
                </span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, ${nexusAccent}, ${accentDark})` }}
                />
              </Link>
            )}

            {/* Book a Call CTA button */}
            <a
              href="https://calendar.app.google/GY63Q6ifdmtxVemeA"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-1.5 font-semibold py-2 px-4 md:px-5 rounded-lg text-xs md:text-sm transition-all duration-300 transform hover:scale-105 text-white overflow-hidden shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, ${accentDark} 100%)`,
                boxShadow: `0 2px 14px ${accent}45`,
              }}
            >
              <span className="relative z-10">{t('book_a_call')}</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
              />
            </a>

            {/* ── Top-Right Language Dropdown [EN, ES, PT] ── */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-xs font-mono font-medium py-1.5 px-2.5 rounded-md transition-all duration-200 border"
                style={{
                  background: 'rgba(10, 25, 41, 0.65)',
                  backdropFilter: 'blur(10px)',
                  borderColor: isLangOpen ? accent : 'rgba(255, 255, 255, 0.12)',
                  color: isLangOpen ? '#ffffff' : '#cbd5e1',
                  boxShadow: isLangOpen ? `0 0 10px ${accent}30` : 'none',
                }}
                aria-label="Select Language"
              >
                <span>{lang}</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Language Dropdown Menu */}
              {isLangOpen && (
                <div
                  className="absolute right-0 mt-2 w-32 rounded-lg py-1.5 shadow-2xl z-50 border animate-fade-in-down"
                  style={{
                    background: 'rgba(10, 25, 41, 0.94)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderColor: 'rgba(8, 143, 143, 0.25)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(8, 143, 143, 0.12)',
                  }}
                >
                  {availableLangs.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        changeLanguage(item.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-mono flex items-center justify-between transition-colors duration-150"
                      style={{
                        color: lang === item.code ? accent : '#94a3b8',
                        background: lang === item.code ? 'rgba(8, 143, 143, 0.12)' : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (lang !== item.code) {
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (lang !== item.code) {
                          e.currentTarget.style.color = '#94a3b8';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span className="font-sans font-medium">{item.label}</span>
                      </span>
                      <span className="font-bold text-[10px]">{item.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Scroll progress bar */}
        {isScrolled && (
          <div
            className="absolute bottom-0 left-0 h-px transition-all duration-100"
            style={{
              width: `${scrollProgress}%`,
              background: `linear-gradient(90deg, ${accent}, ${accentDark})`,
            }}
          />
        )}
      </header>
    </>
  );
};

export default Header;
