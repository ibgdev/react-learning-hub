import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { courseModules } from '../data/courseModules';
import SwarmBackground from '../components/SwarmBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const container = useRef();

    // Group modules into logical phases
    const phases = [
        {
            title: "Phase 1: Foundations",
            color: "var(--accent-primary)",
            modules: courseModules.slice(0, 5)
        },
        {
            title: "Phase 2: Core Mechanics",
            color: "#61dafb",
            modules: courseModules.slice(5, 11)
        },
        {
            title: "Phase 3: Building Apps",
            color: "#4fade6",
            modules: courseModules.slice(11, 15)
        },
        {
            title: "Phase 4: Advanced Mastery",
            color: "#3d96d1",
            modules: courseModules.slice(15, 18)
        },
        {
            title: "Phase 5: Production Ready",
            color: "#2a80bc",
            modules: courseModules.slice(18, 21)
        }
    ];

    useGSAP(() => {
        // Hero animation
        gsap.from('.hero-content > *', {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'expo.out'
        });

        // Background glow animation
        gsap.to('.hero-glow', {
            scale: 1.5,
            opacity: 0.15,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Roadmap title animation
        gsap.from('.roadmap-title', {
            scrollTrigger: {
                trigger: '.roadmap-title',
                start: 'top 90%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Roadmap animations
        phases.forEach((_, i) => {
            gsap.from(`.phase-section-${i}`, {
                scrollTrigger: {
                    trigger: `.phase-section-${i}`,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from(`.phase-section-${i} .card-link`, {
                scrollTrigger: {
                    trigger: `.phase-section-${i}`,
                    start: 'top 80%',
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: 'expo.out'
            });
        });
    }, { scope: container });

    return (
        <div ref={container} style={{ paddingBottom: '100px', overflowX: 'hidden', position: 'relative' }}>
            <SwarmBackground />

            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Hero Section */}
                <header className="hero-content" style={{ textAlign: 'center', padding: '100px 0', position: 'relative' }}>
                    <div className="hero-glow" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(88, 196, 220, 0.15) 0%, transparent 70%)',
                        zIndex: -1,
                        borderRadius: '50%'
                    }}></div>
                    <h1 className="hero-title">
                        React <span className="gradient-text">Learning Hub</span>
                    </h1>
                    <p className="hero-subtitle">
                        A masterclass in React engineering.
                        Interactive, state-of-the-art curriculum with <strong>21 modules</strong> built for the
                        modern developer.
                    </p>
                    <div className="hero-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/module/1">
                            <Button variant="primary" style={{ fontSize: '1.2rem', padding: '16px 45px', borderRadius: '50px' }}>
                                Get Started 🚀
                            </Button>
                        </Link>
                        <Link to="/module/20">
                            <Button variant="secondary" style={{ fontSize: '1.2rem', padding: '16px 45px', borderRadius: '50px' }}>
                                View Roadmap
                            </Button>
                        </Link>
                    </div>
                </header>

                <style>{`
                    @media (max-width: 500px) {
                        .hero-buttons {
                            flex-direction: column;
                            width: 100%;
                            padding: 0 20px;
                        }
                        .hero-buttons a, .hero-buttons button {
                            width: 100%;
                        }
                    }
                `}</style>

                {/* Curriculum Roadmap */}
                <section style={{ marginTop: '80px' }}>
                    <h2 className="roadmap-title" style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center', fontWeight: '800' }}>
                        The <span style={{ color: 'var(--accent-primary)' }}>Curriculum</span>
                    </h2>

                    <div style={{ display: 'grid', gap: '80px' }}>
                        {phases.map((phase, pIdx) => (
                            <div key={pIdx} className={`phase-section-${pIdx}`}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    marginBottom: '30px',
                                    padding: '0 10px'
                                }}>
                                    <div style={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        background: phase.color,
                                        boxShadow: `0 0 20px ${phase.color}`
                                    }}></div>
                                    <h3 style={{ fontSize: '1.8rem', color: phase.color, margin: 0, fontWeight: '700' }}>{phase.title}</h3>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '25px'
                                }}>
                                    {phase.modules.map((mod) => (
                                        <Link key={mod.id} to={mod.path} className="card-link" style={{ textDecoration: 'none' }}>
                                            <div className="card glass" style={{
                                                height: '100%',
                                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                padding: '30px'
                                            }}>
                                                <div style={{
                                                    fontSize: '0.9rem',
                                                    color: phase.color,
                                                    fontWeight: 'bold',
                                                    marginBottom: '15px',
                                                    opacity: 0.7,
                                                    letterSpacing: '1px'
                                                }}>
                                                    MODULE {mod.id}
                                                </div>
                                                <h4 style={{ margin: '0 0 15px 0', color: '#fff', fontSize: '1.25rem', fontWeight: '700' }}>
                                                    {mod.title.split('. ')[1] || mod.title}
                                                </h4>
                                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                                    {mod.content.goal.length > 90 ? mod.content.goal.substring(0, 90) + '...' : mod.content.goal}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
                .card-link:hover .card {
                    transform: translateY(-10px) scale(1.02);
                    border-color: var(--accent-primary);
                    background: rgba(88, 196, 220, 0.05);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .gradient-text {
                    background: linear-gradient(90deg, #58c4dc, #61dafb);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </div>
    );
};

export default Home;
