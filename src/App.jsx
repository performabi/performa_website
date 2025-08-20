import React, { useState, useEffect, useRef } from 'react';
// The local logo import has been removed to fix the build error.

// --- SVG Icons ---
const DocumentChartBarIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const CpuChipIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25h-1.5m-15 3.75h1.5m15 0h1.5m-15 3.75h1.5m15 0h1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const UserGroupIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A3 3 0 0012 12.75a3 3 0 00-3.75 2.964m6.002-11.85a3 3 0 10-4.5 5.364M12 12.75a3 3 0 00-3.75 2.964m0 0a3 3 0 003.75 2.964m-6.002-11.85a3 3 0 10-4.5 5.364m0 0a3 3 0 004.5 5.364m6.002-11.85a3 3 0 10-4.5 5.364" />
    </svg>
);


// --- Header Component ---
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Logo = () => (
    <img 
      src="./logo.png" 
      alt="Performa BI Logo" 
      className="h-7"
    />
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1929]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Logo />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['services', 'portfolio', 'process'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-gray-300 hover:text-[#088f8f] transition-colors duration-300">
              {item}
            </button>
          ))}
          <a href="https://calendar.app.google/QoA7M3QwtSBQAPtu5" target="_blank" rel="noopener noreferrer" className="bg-[#088f8f] hover:bg-[#086086] text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105">
            Book a Call
          </a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

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
      icon: <DocumentChartBarIcon className="h-10 w-10 text-[#088f8f] mb-6" />,
      title: 'The Clarity Dashboard',
      subtitle: '"Your Business Health Check"',
      pitch: "Go from financial uncertainty to complete clarity. We'll transform your raw numbers into a single, easy-to-understand Business Health Report, giving you the peace of mind and confidence that comes from a clear snapshot of your business.",
      recommended: false,
    },
    {
      icon: <CpuChipIcon className="h-10 w-10 text-[#088f8f] mb-6" />,
      title: 'The Growth Engine',
      subtitle: '"Your Automated Operations Hub"',
      pitch: "Stop wasting hours on manual reports. We'll build an automated Power BI hub that unifies your key data, giving your team a single source of truth for operational efficiency and the strategic foresight to plan ahead.",
      recommended: true,
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 text-[#088f8f] mb-6" />,
      title: 'The BI Partner',
      subtitle: '"Your Real-Time Decision Centre"',
      pitch: "Make decisions at the speed of your business. We'll build a live decision centre that provides up-to-the-minute insights, giving you a competitive edge through speed and proactive problem-solving.",
      recommended: false,
    },
  ];

  return (
    <AnimatedSection id="services" className="bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Your Blueprint for Data-Driven Success</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">From a simple health check to a full strategic partnership, we have a solution for your stage of growth.</p>
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
                <a href="https://calendar.app.google/QoA7M3QwtSBQAPtu5" target="_blank" rel="noopener noreferrer" className="text-[#088f8f] font-semibold hover:text-white transition-colors duration-300">
                  Learn More &rarr;
                </a>
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
      challenge: 'A UK e-commerce store was struggling with messy sales data from three different platforms.',
      solution: 'We created a unified sales dashboard in Power BI, automating the data pipeline.',
      result: '+15% Increase in repeat purchases',
      imageUrl: 'https://placehold.co/600x400/0A1929/088F8F?text=Dashboard+1',
    },
    {
      challenge: 'A SaaS startup needed to understand user churn and feature adoption rates.',
      solution: 'Developed an interactive product analytics dashboard to track user journeys and identify drop-off points.',
      result: '-25% Reduction in monthly churn',
      imageUrl: 'https://placehold.co/600x400/0A1929/088F8F?text=Dashboard+2',
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
                <p className="text-[#088f8f] font-semibold mb-2">The Challenge</p>
                <p className="text-gray-300 mb-6">{project.challenge}</p>
                <p className="text-[#088f8f] font-semibold mb-2">The Solution</p>
                <p className="text-gray-300 mb-6">{project.solution}</p>
                <div className="bg-[#0D1117] border border-gray-800 rounded-lg p-4 inline-block">
                  <p className="text-white text-xl md:text-2xl font-bold">{project.result}</p>
                  <p className="text-[#088f8f] text-sm font-semibold">The Result</p>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <img src={project.imageUrl} alt="Project Dashboard" className="rounded-lg shadow-2xl w-full" />
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

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-[#0A1929] border-t border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Performa BI. All Rights Reserved.</p>
                <p className="text-sm mt-2">Empowering UK Entrepreneurs with Data Intelligence.</p>
            </div>
        </footer>
    );
};


// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-[#0A1929] text-gray-200 font-sans leading-relaxed">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
