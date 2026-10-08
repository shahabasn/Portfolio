import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { profileConfig } from '../config/profile';

// SVG Brand Icons for WhatsApp, Instagram, and LinkedIn matching Apple dark theme style
const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const InstagramIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const contactButtons = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: `https://wa.me/${profileConfig.whatsapp}`,
      ariaLabel: 'Contact me on WhatsApp',
      icon: WhatsAppIcon,
      isExternal: true,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: profileConfig.instagram,
      ariaLabel: 'Visit my Instagram',
      icon: InstagramIcon,
      isExternal: true,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: profileConfig.linkedin,
      ariaLabel: 'Visit my LinkedIn',
      icon: LinkedInIcon,
      isExternal: true,
    },
    {
      id: 'email',
      name: 'Email',
      url: `mailto:${profileConfig.email}`,
      ariaLabel: 'Send me an email',
      icon: ({ size }) => <Mail size={size} strokeWidth={1.8} />,
      isExternal: false,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '120px 24px 140px 24px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="apple-card"
        style={{
          padding: '64px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow backdrop effect */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(41, 151, 255, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <span
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent-blue)',
            fontWeight: 600,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          GET IN TOUCH
        </span>

        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}
        >
          Let's build something great.
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 48px auto',
            lineHeight: 1.6,
          }}
        >
          Have a project, opportunity or idea? I'd love to hear from you.
        </p>

        {/* 4 Icon Buttons Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {contactButtons.map((btn) => {
            const IconComponent = btn.icon;
            return (
              <motion.a
                key={btn.id}
                href={btn.url}
                target={btn.isExternal ? '_blank' : undefined}
                rel={btn.isExternal ? 'noopener noreferrer' : undefined}
                aria-label={btn.ariaLabel}
                title={btn.name}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(41, 151, 255, 0.2)';
                  e.currentTarget.style.color = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid var(--accent-blue)';
                  e.currentTarget.style.outlineOffset = '4px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                <IconComponent size={22} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
