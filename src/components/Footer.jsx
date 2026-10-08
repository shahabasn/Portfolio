import React from 'react';
import { profileConfig } from '../config/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: profileConfig.github },
    { name: 'LinkedIn', url: profileConfig.linkedin },
    { name: 'Email', url: profileConfig.email ? `mailto:${profileConfig.email}` : '' },
  ].filter((link) => Boolean(link.url));

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '40px 24px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="footer-content"
      >
        <div style={{ textAlign: 'center' }}>
          <strong
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              fontWeight: 600,
              display: 'block',
            }}
          >
            {profileConfig.name}
          </strong>
          <span
            style={{
              fontSize: '0.88rem',
              color: 'var(--text-tertiary)',
            }}
          >
            {profileConfig.role}
          </span>
        </div>

        {socialLinks.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-tertiary)',
            textAlign: 'center',
          }}
        >
          © {currentYear} {profileConfig.name}. Built with React & Vite. All rights reserved.
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-content {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
