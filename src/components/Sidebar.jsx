import React from 'react';
import { NavLink } from 'react-router-dom';
import { courseModules } from '../data/courseModules';

const Sidebar = ({ isOpen, onClose }) => {
    const linkStyle = ({ isActive }) => ({
        display: 'block',
        padding: '12px 15px',
        margin: '5px 0',
        borderRadius: '6px',
        color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
        backgroundColor: isActive ? 'rgba(88, 196, 220, 0.1)' : 'transparent',
        textDecoration: 'none',
        fontWeight: isActive ? '600' : '400',
        borderLeft: isActive ? '3px solid var(--accent-primary)' : '3px solid transparent',
        transition: 'all 0.2s ease',
        fontSize: '0.9rem'
    });

    return (
        <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div style={{
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                marginBottom: '10px',
                letterSpacing: '1px'
            }}>
                Course Curriculum
            </div>
            <nav onClick={onClose}>
                <NavLink to="/" style={linkStyle} end>
                    Overview
                </NavLink>
                {courseModules.map((module) => (
                    <NavLink key={module.id} to={module.path} style={linkStyle}>
                        {module.title}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
