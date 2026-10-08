import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Code } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
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
          Portfolio
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
            color: 'var(--text-primary)',
          }}
        >
          Selected Work
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            marginBottom: '48px',
            maxWidth: '600px',
          }}
        >
          A few projects I've built while learning, experimenting and solving real-world problems.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="apple-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    PROJECT {project.id}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      padding: '4px 12px',
                      borderRadius: '980px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {project.tagline}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.98rem',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '28px',
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-button-primary"
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-button-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      GitHub <FolderGit2 size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
