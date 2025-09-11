import React from 'react';

const BiHealthCheckPage = () => {
  return (
    <div className="bg-[#0A1929] text-gray-200 font-sans leading-relaxed">
      {/* --- Hero Section --- */}
      <section className="pt-20 pb-16 text-center bg-gradient-to-b from-[#0D1117] to-[#0A1929]">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4">
            How Data-Driven is Your Business, <span className="text-[#088f8f]">Really?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stop guessing. In 5 minutes, get a free, personalized PDF report detailing your company's data maturity, hidden risks, and biggest opportunities for growth.
          </p>
          <a
            href="https://forms.gle/49qK6UmCznx8WxK5A"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#088f8f] hover:bg-[#086086] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Free BI Health Check
          </a>
          <p className="text-sm text-gray-500 mt-4">Free for a limited time. No credit card required.</p>
        </div>
      </section>

      {/* --- What You Get Section --- */}
      <section className="py-20 bg-[#0D1117]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Your Personalised BI Scorecard Includes:</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Item 1 */}
                <div className="bg-[#0A1929] p-8 rounded-lg border border-gray-800">
                    <h3 className="text-2xl font-bold text-[#088f8f] mb-3">Your BI Maturity Score</h3>
                    <p className="text-gray-400">Receive a clear score from 1-100 to benchmark your current data capabilities against our proven framework.</p>
                </div>
                {/* Item 2 */}
                <div className="bg-[#0A1929] p-8 rounded-lg border border-gray-800">
                    <h3 className="text-2xl font-bold text-[#088f8f] mb-3">Your Business Archetype</h3>
                    <p className="text-gray-400">Discover if you're a Data Mapper, Navigator, or Strategist, and what that means for your immediate next steps.</p>
                </div>
                {/* Item 3 */}
                <div className="bg-[#0A1929] p-8 rounded-lg border border-gray-800">
                    <h3 className="text-2xl font-bold text-[#088f8f] mb-3">Actionable Recommendations</h3>
                    <p className="text-gray-400">Get a detailed analysis of your reporting, decision-making, and strategy, with tailored advice to help you scale.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- How It Works Section --- */}
      <section className="py-20 bg-[#0A1929]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Get Your Report in 3 Simple Steps</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Our automated system does the hard work for you.</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-[#088f8f] rounded-full text-white font-bold text-xl">1</div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">Take the 5-Min Assessment</h3>
                        <p className="text-gray-400 mt-1">Fill out the simple, confidential form about your current data processes and biggest challenges.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-[#088f8f] rounded-full text-white font-bold text-xl">2</div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">Automated Analysis</h3>
                        <p className="text-gray-400 mt-1">Our system instantly analyses your answers against our BI Maturity Framework and generates your report.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-[#088f8f] rounded-full text-white font-bold text-xl">3</div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">Receive Your PDF Report</h3>
                        <p className="text-gray-400 mt-1">Your personalised PDF report is delivered directly to your inbox within minutes.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="py-20 bg-[#0D1117]">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-[#088f8f] to-[#086086] rounded-xl p-8 md:p-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Unlock Your Business's Data Potential?</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Your personalised data strategy roadmap is just a few clicks away. Move from gut-feel to data-driven confidence.
                    </p>
                    <a
                        href="https://forms.gle/49qK6UmCznx8WxK5A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#086086] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        Get My Free BI Health Check Report
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default BiHealthCheckPage;

