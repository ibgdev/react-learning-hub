import React, { useState } from 'react';
import Button from '../Button';

const IntroDemo = () => {
    const [showReactWay, setShowReactWay] = useState(false);
    const [reactValue, setReactValue] = useState("Hello");

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Interactive: Declarative vs Imperative</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                In React, you describe <strong>what</strong> you want to see (Declarative), and React handles the <strong>how</strong> (Imperative).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="card" style={{ opacity: showReactWay ? 0.3 : 1, transition: 'opacity 0.3s' }}>
                    <h3 style={{ color: 'var(--accent-error)' }}>The "Old" Way (DOM)</h3>
                    <p style={{ fontSize: '0.8rem' }}>1. Find the element in the DOM.</p>
                    <p style={{ fontSize: '0.8rem' }}>2. Manually update its innerHTML.</p>
                    <div style={{ padding: '10px', background: '#000', borderRadius: '4px', marginTop: '10px' }}>
                        <code>document.getElementById('msg').innerText = 'Changed!'</code>
                    </div>
                </div>

                <div className="card" style={{ borderColor: showReactWay ? 'var(--accent-primary)' : 'var(--bg-tertiary)', transition: 'border-color 0.3s' }}>
                    <h3 style={{ color: 'var(--accent-primary)' }}>The "React" Way</h3>
                    <p style={{ fontSize: '0.8rem' }}>1. Just update the State.</p>
                    <p style={{ fontSize: '0.8rem' }}>2. React re-renders automatically.</p>
                    <div style={{ padding: '10px', background: '#000', borderRadius: '4px', marginTop: '10px' }}>
                        <code>setReactValue('Changed!')</code>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <div style={{
                    fontSize: '1.5rem',
                    margin: '20px 0',
                    padding: '20px',
                    border: '2px dashed var(--bg-tertiary)',
                    borderRadius: '8px',
                    color: reactValue === "Hello" ? 'var(--text-primary)' : 'var(--accent-primary)'
                }}>
                    {reactValue} World!
                </div>

                <Button onClick={() => {
                    setReactValue(reactValue === "Hello" ? "React" : "Hello");
                    setShowReactWay(true);
                }}>
                    Toggle State
                </Button>
            </div>
        </div>
    );
};

export default IntroDemo;
