import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Sparkles, Code2 } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Responsive Websites",
    description:
      "Crafting modern, mobile-first websites that look stunning and perform smoothly across desktop, tablet, and mobile devices.",
  },
  {
    icon: Code2,
    title: "React Web Applications",
    description:
      "Developing interactive, component-driven web applications built with clean architecture, state management, and fast execution.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Building high-converting, aesthetically crafted landing pages designed with strong typography, dynamic layouts, and clear hierarchy.",
  },
  {
    icon: Sparkles,
    title: "Website UI Improvements",
    description:
      "Enhancing existing user interfaces with smooth animations, micro-interactions, responsive fixes, and modern visual polish.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '120px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent-blue)',
            fontWeight: 600,
            display: 'block',
            marginBottom: '12px',
          }}
        >
          Specialties
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
            color: 'var(--text-primary)',
          }}
        >
          What I Can Build
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="apple-card"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <IconComponent size={22} />
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: 'var(--text-primary)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
