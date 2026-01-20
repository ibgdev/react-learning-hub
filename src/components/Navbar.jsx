import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
    return (
        <nav style={{
            height: 'var(--nav-height)',
            borderBottom: '1px solid var(--bg-tertiary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            backgroundColor: 'var(--bg-secondary)',
            position: 'sticky',
            top: 0,
            zIndex: 1100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button
                    onClick={onToggleSidebar}
                    className="mobile-menu-btn"
                >
                    {isSidebarOpen ? '✕' : '☰'}
                </button>

                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '30px',
                        height: '30px',
                        background: 'var(--accent-primary)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: '#000'
                    }}>R</div>
                    <span style={{
                        color: 'var(--text-primary)',
                        fontWeight: '700',
                        fontSize: '1.2rem',
                        letterSpacing: '0.5px'
                    }}>
                        React<span style={{ color: 'var(--accent-primary)' }}>ode</span>
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
