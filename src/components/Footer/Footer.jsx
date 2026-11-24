import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer
            className="relative border-t py-10 overflow-hidden"
            style={{
                background: '#0A1929',
                borderColor: 'rgba(8, 143, 143, 0.12)',
            }}
        >
            {/* Subtle top glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(8,143,143,0.5), transparent)',
                }}
                aria-hidden="true"
            />
            <div className="container mx-auto px-6 text-center">
                <div className="mb-4">
                    <img src="/logo.png" alt="Performa BI Logo" className="h-6 mx-auto opacity-60" />
                </div>
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} {t('footer_rights')}
                </p>
                <p className="text-xs mt-2" style={{ color: 'rgba(8,143,143,0.7)' }}>
                    {t('footer_tagline')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
