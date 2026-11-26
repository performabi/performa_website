import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const BiHealthCheckPage = () => {
  const { t } = useLanguage();

  const scoreItems = [
    {
      title: t('bhc_score_1_t'),
      desc: t('bhc_score_1_d'),
    },
    {
      title: t('bhc_score_2_t'),
      desc: t('bhc_score_2_d'),
    },
    {
      title: t('bhc_score_3_t'),
      desc: t('bhc_score_3_d'),
    },
  ];

  const steps = [
    {
      label: t('bhc_step_1_t'),
      desc: t('bhc_step_1_d'),
    },
    {
      label: t('bhc_step_2_t'),
      desc: t('bhc_step_2_d'),
    },
    {
      label: t('bhc_step_3_t'),
      desc: t('bhc_step_3_d'),
    },
  ];

  return (
    <div className="bg-[#0A1929] text-gray-200">

      {/* Hero */}
      <section className="relative pt-20 pb-16 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% -10%, rgba(8,143,143,0.18) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6">
          <span className="inline-block text-sm uppercase tracking-widest text-[#088f8f] font-semibold mb-4">{t('bhc_hero_tag')}</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4">
            {t('bhc_hero_title_1')}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #088f8f 0%, #0eb8b8 50%, #086086 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('bhc_hero_title_2')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('bhc_hero_sub')}
          </p>
          <a
            href="https://forms.gle/49qK6UmCznx8WxK5A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold py-4 px-8 rounded-lg text-lg text-white transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #088f8f 0%, #086086 100%)',
              boxShadow: '0 4px 24px rgba(8,143,143,0.4)',
            }}
          >
            {t('bhc_hero_cta')}
          </a>
          <p className="text-sm text-gray-500 mt-4">{t('bhc_hero_disclaimer')}</p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-[#0D1117] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(8,96,134,0.1) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-sm uppercase tracking-widest text-[#088f8f] font-semibold mb-3">{t('bhc_inc_tag')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t('bhc_inc_title')}</h2>
          <div className="mt-6 mb-12 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
          <div className="grid md:grid-cols-3 gap-8">
            {scoreItems.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl text-left transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(13,17,23,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(8,143,143,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div className="w-8 h-0.5 mb-4 rounded-full" style={{ background: 'linear-gradient(90deg, #088f8f, #086086)' }} />
                <h3 className="text-xl font-bold text-[#088f8f] mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0A1929]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-widest text-[#088f8f] font-semibold mb-3">{t('bhc_proc_tag')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t('bhc_proc_title')}</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t('bhc_proc_sub')}</p>
            <div className="mt-6 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(13,17,23,0.5)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(8,143,143,0.15)',
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-white font-bold text-xl"
                  style={{
                    background: 'linear-gradient(135deg, #088f8f 0%, #086086 100%)',
                    boxShadow: '0 4px 16px rgba(8,143,143,0.4)',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{step.label}</h3>
                  <p className="text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1117]">
        <div className="container mx-auto px-6">
          <div
            className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(8,143,143,0.25) 0%, rgba(8,96,134,0.3) 50%, rgba(8,143,143,0.15) 100%)',
              border: '1px solid rgba(8,143,143,0.35)',
              boxShadow: '0 0 80px rgba(8,143,143,0.15), 0 24px 64px rgba(0,0,0,0.4)',
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(8,143,143,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }}
              aria-hidden="true"
            />
            <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-4">{t('bhc_cta_title')}</h2>
            <p className="relative text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('bhc_cta_sub')}
            </p>
            <a
              href="https://forms.gle/49qK6UmCznx8WxK5A"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              style={{ color: '#086086', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              {t('bhc_cta_btn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiHealthCheckPage;
