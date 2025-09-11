import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

// --- Animated Section Wrapper ---
const useScrollAnimation = () => {
    const ref = useRef(null);
    const [style, setStyle] = useState({
        opacity: 0,
        transform: 'translateY(50px)',
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const { top, height } = ref.current.getBoundingClientRect();
            const screenHeight = window.innerHeight;
            
            if (height === 0) return;

            const progress = Math.max(0, Math.min(1, (screenHeight - top) / (height * 0.8)));

            setStyle({
                opacity: progress,
                transform: `translateY(${50 * (1 - progress)}px)`,
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { ref, style };
};

const AnimatedSection = ({ children, id, className = '' }) => {
    const { ref, style } = useScrollAnimation();
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <div ref={ref} style={{...style, transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'}}>
                {children}
            </div>
        </section>
    );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#0A1929] text-white -mt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-down">
          Stop Guessing. <span className="text-[#088f8f]">Start Growing.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          We transform your scattered business data into a clear, actionable roadmap, empowering you to make intelligent decisions and drive predictable growth.
        </p>
        <a href="https://calendar.app.google/QoA7M3QwtSBQAPtu5" target="_blank" rel="noopener noreferrer" className="bg-[#088f8f] hover:bg-[#086086] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-300 inline-block">
          Book a Free Discovery Call
        </a>
      </div>
    </section>
  );
};

// --- Services Section ---
const ServicesSection = () => {
  const services = [
    {
      icon: <img src="/prod1icon.png" alt="Scorecard Icon" className="h-10 w-10 mb-6" />,
      title: 'BI Health Check',
      subtitle: '"Check Your Company\'s BI Maturity"',
      pitch: "In just 5 minutes, answer a series of targeted questions to receive a complimentary, personalised PDF report assessing your business's data maturity and highlighting key growth opportunities.",
      recommended: true,
      linkType: 'internal',
      linkTarget: '/bihealthcheck',
    },
    {
      icon: <img src="/prod2icon.png" alt="Growth Engine Icon" className="h-10 w-10 mb-6" />,
      title: 'The Growth Engine',
      subtitle: '"Your Automated Operations Hub"',
      pitch: "Our core solution. We'll build an automated Power BI hub that unifies your key data, giving your team a single source of truth for operational efficiency and strategic foresight.",
      recommended: false,
      linkType: 'external',
      linkTarget: 'https://calendar.app.google/QoA7M3QwtSBQAPtu5',
    },
    {
      icon: <img src="/prod3icon.png" alt="BI Partner Icon" className="h-10 w-10 mb-6" />,
      title: 'The BI Partner',
      subtitle: '"Your Real-Time Decision Centre"',
      pitch: "Make decisions at the speed of your business. We'll build a live decision centre that provides up-to-the-minute insights, giving you a competitive edge.",
      recommended: false,
      linkType: 'external',
      linkTarget: 'https://calendar.app.google/QoA7M3QwtSBQAPtu5',
    },
  ];

  return (
    <AnimatedSection id="services" className="bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Your Blueprint for Data-Driven Success</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">From a simple assessment to a full strategic partnership, we have a solution for your stage of growth.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div key={index} className={`bg-[#0A1929] rounded-xl p-8 border flex flex-col text-center transition-all duration-300 ${service.recommended ? 'border-[#088f8f] shadow-2xl shadow-[#088f8f]/20 transform md:scale-105' : 'border-gray-800 hover:border-[#086086]'}`}>
              <div className="flex-grow flex flex-col items-center">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.subtitle}</p>
                  <p className="text-gray-300 flex-grow">{service.pitch}</p>
              </div>
              <div className="mt-8">
                {service.linkType === 'internal' ? (
                  <Link to={service.linkTarget} className="text-[#088f8f] font-semibold hover:text-white transition-colors duration-300">
                    Learn More &rarr;
                  </Link>
                ) : (
                  <a href={service.linkTarget} target="_blank" rel="noopener noreferrer" className="text-[#088f8f] font-semibold hover:text-white transition-colors duration-300">
                    Learn More &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Portfolio Section ---
const PortfolioSection = () => {
  const projects = [
    {
      title: "The Unexpected Revenue Gap",
      client: "UK-Based Engineering Consultancy",
      challenge: 'Flying blind with revenue forecasts based on spreadsheets and gut-feelings, the founder was stressed about missing their ambitious annual target and making strategic missteps.',
      solution: 'We implemented a unified Sales Pipeline Dashboard. For the first time, the entire multi-million pound pipeline was visible in one place, broken down by country, division, and consultant.',
      result: 'Proactive Revenue Management',
      imageUrl: '/Dash1.png',
    },
    {
      title: "The Profitable but Cash-Poor Crisis",
      client: "European Service Company",
      challenge: 'The business was profitable on paper but constantly struggled with cash flow, especially when managing finances across both GBP and EUR currencies.',
      solution: 'We developed a powerful Cash Position Dashboard to give the director a consolidated, up-to-the-minute view of the company\'s true liquidity across all accounts.',
      result: 'Eliminated Financial Anxiety',
      imageUrl: '/Dash2.png',
    },
  ];

  return (
    <AnimatedSection id="portfolio" className="bg-[#0A1929]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">From Data Chaos to Tangible Results</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We don't just build dashboards; we deliver business outcomes.</p>
        </div>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-lg text-gray-400 font-semibold mb-6">{project.client}</p>

                <p className="text-[#088f8f] font-semibold mb-2">The Challenge</p>
                <p className="text-gray-300 mb-6">{project.challenge}</p>
                
                <p className="text-[#088f8f] font-semibold mb-2">The Solution</p>
                <p className="text-gray-300 mb-6">{project.solution}</p>
                
                <div className="bg-[#0D1117] border border-gray-800 rounded-lg p-4 inline-block">
                  <p className="text-white text-xl md:text-2xl font-bold">{project.result}</p>
                  <p className="text-[#088f8f] text-sm font-semibold">The Outcome</p>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <img src={project.imageUrl} alt={project.title} className="rounded-lg shadow-2xl w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Process Section ---
const ProcessSection = () => {
  const steps = [
    {
      name: 'Discovery',
      description: 'A 15-minute call to understand your unique challenges and goals.',
    },
    {
      name: 'Strategy & Build',
      description: 'We design your custom BI solution and build the data pipelines and dashboards.',
    },
    {
      name: 'Deliver & Empower',
      description: 'We deliver your solution and empower your team to use data effectively.',
    },
  ];

  return (
    <AnimatedSection id="process" className="bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our 3-Step Path to Clarity</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We make the process of becoming data-driven simple and transparent.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800" aria-hidden="true"></div>
          <div className="relative grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-8 bg-[#0A1929] rounded-lg border border-gray-800">
                <div className="flex items-center justify-center h-16 w-16 bg-[#088f8f] rounded-full mx-auto mb-6 border-4 border-[#0D1117]">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.name}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="bg-[#0A1929]">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#088f8f] to-[#086086] rounded-xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Unlock Your Business Potential?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let's have a no-obligation chat. In just 15 minutes, you'll get a clearer picture of how data can drive your business forward.
          </p>
          <a
            href="https://calendar.app.google/QoA7M3QwtSBQAPtu5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#086086] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};


// --- Main HomePage Component ---
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}

