import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Milestone } from 'lucide-react';

const timelineSteps = [
  {
    phase: "01",
    title: "Full Stack Development Foundations",
    description:
      "Explored core web fundamentals, Python, Django, REST architecture and database structure.",
    status: "Completed",
  },
  {
    phase: "02",
    title: "React & Modern Frontend Development",
    description:
      "Shifted deep focus to frontend engineering, component systems, state management, and modern CSS/UI design.",
    status: "Completed",
  },
  {
    phase: "03",
    title: "Building Real-World Projects",
    description:
      "Developed projects like WeHelp and Lumo, tackling practical frontend requirements, UI flows, and performance.",
    status: "Completed",
  },
  {
    phase: "04",
    title: "Currently Growing as a Developer",
    description:
      "Continuously honing UI aesthetics, web performance, interactive micro-animations, and frontend craft.",
    status: "Active Focus",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        padding: '120px 24px',
        maxWidth: '800px',
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
          Evolution
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
          My Journey
        </h2>

        {/* Minimal Timeline */}
        <div
          style={{
            position: 'relative',
            paddingLeft: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: '11px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              backgroundColor: 'var(--border-subtle)',
            }}
          />

          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: 'relative',
              }}
            >
              {/* Dot indicator */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '4px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: step.status === 'Active Focus' ? 'var(--accent-blue)' : 'var(--bg-secondary)',
                  border: `2px solid ${step.status === 'Active Focus' ? 'var(--accent-blue)' : 'var(--border-hover)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: step.status === 'Active Focus' ? '0 0 12px var(--accent-blue-glow)' : 'none',
                }}
              >
                {step.status === 'Active Focus' && (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                    }}
                  />
                )}
              </div>

              {/* Content box */}
              <div className="apple-card" style={{ padding: '24px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: step.status === 'Active Focus' ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                      fontWeight: 600,
                    }}
                  >
                    {step.status}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
