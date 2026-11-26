import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PortfolioPage = () => {
  const { t } = useLanguage();
  const presentationUrl = 'https://docs.google.com/presentation/d/1lq-K29N0pwLpunYw7U4KA7Aox5ftvQ3_e3XmZ5AoEUQ/embed?start=false&loop=false&delayms=3000';

  return (
    <div className="bg-[#0A1929] text-gray-200 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-widest text-[#088f8f] font-semibold mb-3">{t('port_page_tag')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('port_page_title')}</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            {t('port_page_sub')}
          </p>
          <div className="mt-6 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
        </div>

        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            paddingBottom: '56.25%',
            height: 0,
            boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(8,143,143,0.15)',
          }}
        >
          <iframe
            src={presentationUrl}
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title="Portfolio Presentation"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
