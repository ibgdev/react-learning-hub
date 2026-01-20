import React from 'react';

const Button = ({ onClick, children, variant = 'primary', style }) => {
    const baseStyle = {
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'transform 0.1s ease, box-shadow 0.2s ease',
        ...style
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--accent-primary)',
            color: '#000',
            boxShadow: '0 0 10px rgba(0, 255, 157, 0.4)'
        },
        secondary: {
            backgroundColor: 'transparent',
            border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)'
        }
    };

    return (
        <button
            onClick={onClick}
            style={{ ...baseStyle, ...variants[variant] }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                if (variant === 'primary') e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 157, 0.6)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                if (variant === 'primary') e.target.style.boxShadow = '0 0 10px rgba(0, 255, 157, 0.4)';
            }}
        >
            {children}
        </button>
    );
};

export default Button;
