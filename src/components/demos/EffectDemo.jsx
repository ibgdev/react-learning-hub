import React, { useState, useEffect } from 'react';
import Button from '../Button';

const EffectDemo = () => {
    const [count, setCount] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [status, setStatus] = useState('Mounting...');

    useEffect(() => {
        setStatus('Component Mounted! 🚀');

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (count > 0) {
            setStatus(`Count updated to ${count} 🔄`);
        }
    }, [count]);

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>Side Effects Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Observe how <code>useEffect</code> synchronizes the UI with external systems.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="card">
                    <h4 style={{ color: 'var(--accent-primary)' }}>1. Dependency Tracking</h4>
                    <p style={{ fontSize: '0.8rem' }}>Every time the count changes, an effect runs.</p>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{count}</div>
                        <Button onClick={() => setCount(c => c + 1)}>Increment</Button>
                    </div>
                </div>

                <div className="card">
                    <h4 style={{ color: 'var(--accent-primary)' }}>2. Browser API (Resize)</h4>
                    <p style={{ fontSize: '0.8rem' }}>This effect listens to the window resize event.</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
                        <div style={{ padding: '10px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                            Width: <strong>{windowWidth}px</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'var(--bg-tertiary)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--accent-secondary)'
            }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '5px' }}>LIFECYCLE STATUS:</div>
                <div style={{ fontWeight: 'bold' }}>{status}</div>
            </div>
            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
        </div>
    );
};

export default EffectDemo;
