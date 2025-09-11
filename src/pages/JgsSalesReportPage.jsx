import React from 'react';

const JgsSalesReportPage = () => {
  const reportUrl = "https://app.powerbi.com/view?r=eyJrIjoiZWEyODkzY2QtZDA5ZS00YTdhLWJiZTItYzJhZTY0YjBkY2Q2IiwidCI6IjJiNmMxMWI3LWU5OTUtNDIzZC1iNzQ4LTllM2Q5Y2U3MDVkYiJ9";

  return (
    <div className="bg-[#0A1929] text-gray-200 font-sans leading-relaxed py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">JGS Sales Dashboard</h1>
          <p className="text-lg text-gray-400 mt-4">
            Sales data and performance metrics.
          </p>
        </div>

        {/* Centering container for the iframe */}
        <div className="flex justify-center">
          <iframe
            title="JGS Sales Dashboard"
            width="600"
            height="373.5"
            src={reportUrl}
            frameBorder="0"
            allowFullScreen={true}
            className="border border-gray-800 rounded-lg shadow-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JgsSalesReportPage;