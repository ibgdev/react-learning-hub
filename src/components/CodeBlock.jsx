import React from 'react';

const CodeBlock = ({ code, language = 'javascript' }) => {
    return (
        <div style={{
            backgroundColor: 'var(--code-bg)',
            color: 'var(--code-text)',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            overflowX: 'auto',
            margin: '20px 0',
            border: '1px solid #333',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                opacity: 0.7
            }}>
                {language}
            </div>
            <pre style={{ margin: 0 }}>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;
