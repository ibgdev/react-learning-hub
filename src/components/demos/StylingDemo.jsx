import React, { useState } from 'react';

const StylingDemo = () => {
    const [method, setMethod] = useState('inline');

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>Styling Comparison</h2>
            <p style={{ color: 'var(--text-secondary)' }}>React doesn't care how you style, but some ways are better than others.</p>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setMethod('inline')}
                    style={{
                        padding: '8px 15px',
                        background: method === 'inline' ? 'var(--accent-primary)' : 'transparent',
                        color: method === 'inline' ? '#000' : '#fff',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Inline Styles
                </button>
                <button
                    onClick={() => setMethod('tailwind')}
                    style={{
                        padding: '8px 15px',
                        background: method === 'tailwind' ? '#61dafb' : 'transparent',
                        color: method === 'tailwind' ? '#000' : '#fff',
                        border: '1px solid #61dafb',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Utility-First (Tailwind)
                </button>
                <button
                    onClick={() => setMethod('css-modules')}
                    style={{
                        padding: '8px 15px',
                        background: method === 'css-modules' ? 'var(--text-primary)' : 'transparent',
                        color: method === 'css-modules' ? '#000' : '#fff',
                        border: `1px solid var(--text-primary)`,
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    CSS Modules
                </button>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '40px', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {method === 'inline' && (
                    <div style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', padding: '20px', border: '2px solid var(--accent-primary)', borderRadius: '8px' }}>
                        styled with color: "var(--accent-primary)"
                    </div>
                )}

                {method === 'tailwind' && (
                    <div className="bg-sky-500 text-white p-4 rounded-lg shadow-xl" style={{ background: '#61dafb', padding: '20px', borderRadius: '8px', color: '#000', fontWeight: 'bold' }}>
                        className="bg-sky-400 p-4..."
                    </div>
                )}

                {method === 'css-modules' && (
                    <div style={{ background: 'var(--bg-tertiary)', padding: '20px', border: '1px solid #fff', borderRadius: '8px' }}>
                        className={"styles.container"}
                    </div>
                )}
            </div>

            <div style={{ marginTop: '20px' }}>
                <pre style={{ fontSize: '0.8rem', background: '#000', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
                    {method === 'inline' ? '<div style={{ color: "#58c4dc" }}>...</div>' :
                        method === 'tailwind' ? '<div className="bg-sky-400 p-4">...</div>' :
                            '<div className={styles.wrapper}>...</div>'}
                </pre>
            </div>
        </div>
    );
};

export default StylingDemo;
