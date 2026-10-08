import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Sparkles } from 'lucide-react';
import { profileConfig } from '../config/profile';
import TiltCard from './TiltCard';

const highlights = [
  {
    icon: MapPin,
    title: "Based in",
    detail: profileConfig.location,
  },
  {
    icon: Target,
    title: "Focus",
    detail: "Frontend Development",
  },
  {
    icon: Sparkles,
    title: "Availability",
    detail: "Open to Opportunities",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
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
          Overview
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            color: 'var(--text-primary)',
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Main Editorial Text with staggered paragraph reveals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              I'm a frontend-focused developer who enjoys turning ideas into clean, responsive and interactive web experiences.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              I have a background in full-stack development and experience working with React, JavaScript, Python, Django and REST APIs.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              I'm currently focused on improving my frontend development skills and building practical digital products.
            </motion.p>
          </motion.div>

          {/* Staggered Highlights Cards with 3D Tilt */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <TiltCard
                    className="apple-card"
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-blue)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-tertiary)',
                          display: 'block',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {item.title}
                      </span>
                      <strong
                        style={{
                          fontSize: '1.05rem',
                          color: 'var(--text-primary)',
                          fontWeight: 600,
                        }}
                      >
                        {item.detail}
                      </strong>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
