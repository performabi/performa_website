import React from 'react';

const PortfolioPage = () => {
  // Construct the embeddable URL for the Google Slides presentation
  const presentationUrl = "https://docs.google.com/presentation/d/1lq-K29N0pwLpunYw7U4KA7Aox5ftvQ3_e3XmZ5AoEUQ/embed?start=false&loop=false&delayms=3000";

  return (
    <div className="bg-[#0A1929] text-gray-200 font-sans leading-relaxed py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Portfolio in Action</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our case studies to see how we transform data chaos into tangible business outcomes.
          </p>
        </div>

        {/* Responsive container for the iframe */}
        <div className="relative h-0" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src={presentationUrl}
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl border border-gray-800"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
