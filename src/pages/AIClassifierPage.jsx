import React, { useState } from 'react';

const instructions = [
  'Download the CSV from Starling Bank and MetroBank and load it to the designed field. You can click & browse or drag & drop the file.',
  'Then, click the button — "PROCESS FILE".',
  'The system may take up to 10 seconds to identify all the transactions, make the best suggestions and load.',
  'Please check the suggested categories and amend if necessary using the dropdown menu.',
  'Download the Classified Report by clicking on Export Classified Data (CSV).',
];

const AiClassifierPage = () => {
  const [showInstructions, setShowInstructions] = useState(false);

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
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#088f8f' }}>AI Classifier</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Click below to access the AI Classifier tool. Loading may take up to 30 seconds on first launch.
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
            {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
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
            Access AI Classifier →
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
            <p className="text-xs uppercase tracking-widest text-[#088f8f] font-bold mb-3">Please Note</p>
            <p className="text-gray-400 mb-5 leading-relaxed">
              Loading the AI System may take up to 30 seconds. It will request a login and password — please get in touch if you haven't received yours.
            </p>
            <p className="text-xs uppercase tracking-widest text-[#088f8f] font-bold mb-3">How to Use</p>
            <ol className="space-y-2">
              {instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                  <span className="flex-shrink-0 font-bold" style={{ color: '#088f8f' }}>{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="font-bold text-white mt-4">All Done!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiClassifierPage;
