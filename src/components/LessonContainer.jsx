import React from 'react';

const LessonContainer = ({ title, description, children }) => {
    return (
        <div className="lesson-content">
            <h1 className="typing-effect">{title}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                {description}
            </p>
            {children}
        </div>
    );
};

export default LessonContainer;
