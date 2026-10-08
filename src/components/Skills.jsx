import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Code2,
  FileCode,
  Palette,
  Terminal,
  Server,
  Cpu,
  Database,
  GitBranch,
  FolderGit2,
  Zap,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Atom,
  Code2,
  FileCode,
  Palette,
  Terminal,
  Server,
  Cpu,
  Database,
  GitBranch,
  Github: FolderGit2,
  Zap,
};

export default function Skills() {
  return (
    <section
      id="skills"
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
          Capabilities
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
          Tools I Build With
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="apple-card"
              style={{ padding: '24px' }}
            >
              <h3
                style={{
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '20px',
                  fontWeight: 600,
                }}
              >
                {category.title}
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid transparent',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      <IconComponent size={18} style={{ color: 'var(--accent-blue)' }} />
                      <span
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
