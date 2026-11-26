import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AiClassifierPage = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const { t } = useLanguage();

  const instructions = [
    t('ai_step_1'),
    t('ai_step_2'),
    t('ai_step_3'),
    t('ai_step_4'),
    t('ai_step_5'),
  ];

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center bg-[#0A1929] p-6">
      <div
        className="w-full max-w-2xl rounded-2xl p-8 md:p-12 text-center"
        style={{
          background: 'rgba(13,17,23,0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(8,143,143,0.2)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        }}
      >
        <div className="w-12 h-0.5 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, #088f8f, #086086)' }} />
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#088f8f' }}>{t('ai_title')}</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          {t('ai_sub')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setShowInstructions(v => !v)}
            className="w-full sm:w-auto font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-gray-300 hover:text-white"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {showInstructions ? t('ai_btn_hide') : t('ai_btn_show')}
          </button>
          <a
            href="https://performabi.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-lg text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #088f8f 0%, #086086 100%)',
              boxShadow: '0 4px 16px rgba(8,143,143,0.4)',
            }}
          >
            {t('ai_btn_access')}
          </a>
        </div>

        {showInstructions && (
          <div
            className="text-left rounded-xl p-6 mt-2 animate-fade-in-down"
            style={{
              background: 'rgba(10,25,41,0.6)',
              border: '1px solid rgba(8,143,143,0.15)',
            }}
          >
            <p className="text-xs uppercase tracking-widest text-[#088f8f] font-bold mb-3">{t('ai_note_tag')}</p>
            <p className="text-gray-400 mb-5 leading-relaxed">
              {t('ai_note_text')}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#088f8f] font-bold mb-3">{t('ai_how_to')}</p>
            <ol className="space-y-2">
              {instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                  <span className="flex-shrink-0 font-bold" style={{ color: '#088f8f' }}>{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="font-bold text-white mt-4">{t('ai_done')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiClassifierPage;
