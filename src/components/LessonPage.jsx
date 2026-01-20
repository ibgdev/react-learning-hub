import React, { useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import LessonContainer from './LessonContainer';
import CodeBlock from './CodeBlock';
import { courseModules } from '../data/courseModules';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Demos
import HooksDemo from './demos/HooksDemo';
import BackendDemo from './demos/BackendDemo';
import IntroDemo from './demos/IntroDemo';
import JSDemo from './demos/JSDemo';
import EnvDemo from './demos/EnvDemo';
import JSXDemo from './demos/JSXDemo';
import ComponentDemo from './demos/ComponentDemo';
import PropsDemo from './demos/PropsDemo';
import EventDemo from './demos/EventDemo';
import ConditionalDemo from './demos/ConditionalDemo';
import ListDemo from './demos/ListDemo';
import EffectDemo from './demos/EffectDemo';
import RouterDemo from './demos/RouterDemo';
import StylingDemo from './demos/StylingDemo';
import FormsDemo from './demos/FormsDemo';
import ContextDemo from './demos/ContextDemo';
import MemoDemo from './demos/MemoDemo';
import DeployDemo from './demos/DeployDemo';
import CodeChallenge from './CodeChallenge';

gsap.registerPlugin(ScrollTrigger);

const demos = {
    1: IntroDemo,
    2: JSDemo,
    3: EnvDemo,
    4: JSXDemo,
    5: ComponentDemo,
    6: PropsDemo,
    8: EventDemo,
    9: ConditionalDemo,
    10: ListDemo,
    11: EffectDemo,
    12: BackendDemo,
    13: RouterDemo,
    14: StylingDemo,
    15: FormsDemo,
    16: ContextDemo,
    18: MemoDemo,
    20: DeployDemo,
    7: HooksDemo
};

const LessonPage = () => {
    const { id } = useParams();
    const container = useRef();
    const moduleId = parseInt(id);
    const module = courseModules.find(m => m.id === moduleId);

    useGSAP(() => {
        if (!module) return;

        // Animate section cards on scroll
        gsap.from('.lesson-section-card', {
            scrollTrigger: {
                trigger: '.lesson-sections-container',
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        });

        // Bottom nav reveal
        gsap.from('.lesson-footer-nav', {
            scrollTrigger: {
                trigger: '.lesson-footer-nav',
                start: 'top 95%',
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out'
        });
    }, { scope: container, dependencies: [moduleId] });

    if (!module) {
        return <Navigate to="/" replace />;
    }

    const DemoComponent = demos[moduleId];

    return (
        <div ref={container}>
            <LessonContainer
                title={module.content.title}
                description={module.content.goal}
            >
                <div className="lesson-sections-container" style={{ display: 'grid', gap: '30px' }}>
                    {module.content.sections.map((section, index) => (
                        <div key={index} className="card lesson-section-card">
                            <h3 style={{ color: 'var(--accent-secondary)' }}>{section.heading}</h3>

                            <div className="lesson-section-grid">
                                <div className="lesson-section-text">
                                    {section.items && (
                                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {section.image && (
                                    <div style={{
                                        width: '180px',
                                        height: '180px',
                                        flexShrink: 0,
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--bg-tertiary)',
                                        background: 'var(--bg-primary)'
                                    }}>
                                        <img
                                            src={section.image}
                                            alt={section.heading}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                            </div>

                            {section.subCards && (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '15px',
                                    marginTop: '15px'
                                }}>
                                    {section.subCards.map((card, i) => (
                                        <div key={i} className="card" style={{ background: 'var(--bg-tertiary)', border: 'none' }}>
                                            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{card.icon}</div>
                                            <h4 style={{ margin: '0 0 5px 0', color: 'var(--accent-primary)' }}>{card.title}</h4>
                                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{card.text}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.code && (
                                <CodeBlock code={section.code} />
                            )}
                        </div>
                    ))}
                </div>

                {DemoComponent && (
                    <div className="lesson-section-card" style={{ marginTop: '30px' }}>
                        <DemoComponent />
                    </div>
                )}

                {module.content.challenge && (
                    <div className="lesson-section-card" style={{ marginTop: '30px' }}>
                        <CodeChallenge challenge={module.content.challenge} />
                    </div>
                )}

                <div className="lesson-footer-nav" style={{
                    marginTop: '60px',
                    paddingTop: '30px',
                    borderTop: '1px solid var(--bg-tertiary)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        ← Back to Overview
                    </Link>
                    {moduleId < 21 && (
                        <Link to={`/module/${moduleId + 1}`}>
                            <button style={{
                                padding: '12px 25px',
                                background: 'var(--accent-primary)',
                                color: '#000',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                                Next Module: {courseModules.find(m => m.id === moduleId + 1)?.title.split('. ')[1]} →
                            </button>
                        </Link>
                    )}
                </div>
            </LessonContainer>
        </div>
    );
};

export default LessonPage;
