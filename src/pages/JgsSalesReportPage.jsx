import React from 'react';

const REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiMGQ2NDA5OTEtMzM5YS00MDA5LWJmMjctMTQ1NmYxZjNiZWQ3IiwidCI6IjJiNmMxMWI3LWU5OTUtNDIzZC1iNzQ4LTllM2Q5Y2U3MDVkYiJ9';

const JgsSalesReportPage = () => (
  <div className="bg-[#0A1929] text-gray-200 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <span className="inline-block text-sm uppercase tracking-widest text-[#088f8f] font-semibold mb-3">Live Report</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">JGS Sales Dashboard</h1>
        <p className="text-lg text-gray-400 mt-4">Sales data and performance metrics.</p>
        <div className="mt-6 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #088f8f, transparent)' }} />
      </div>

      <div className="flex justify-center">
        <div
          className="rounded-xl overflow-hidden"
          style={{
            boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(8,143,143,0.15)',
          }}
        >
          <iframe
            title="JGS Sales Dashboard"
            width="600"
            height="373"
            src={REPORT_URL}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
);

export default JgsSalesReportPage;
