import React, { useState, useEffect } from 'react';
import Button from '../Button';
import CodeBlock from '../CodeBlock';

const HooksDemo = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Live Interactive Demo</h2>

            <div className="card" style={{ marginBottom: '40px' }}>
                <h3>1. useState Counter</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
                    <Button onClick={() => setCount(count + 1)}>
                        Increment Count
                    </Button>
                    <span style={{ fontSize: '2rem', fontFamily: 'monospace', color: 'var(--accent-primary)' }}>
                        {count}
                    </span>
                </div>
            </div>

            <div className="card">
                <h3>2. useEffect Timer</h3>
                <div style={{ margin: '20px 0', padding: '15px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>
                            Seconds: <span style={{ color: 'var(--accent-secondary)' }}>{timer}</span>
                        </span>
                        <Button variant="secondary" onClick={() => setIsRunning(!isRunning)}>
                            {isRunning ? 'Pause Timer' : 'Start Timer'}
                        </Button>
                        <Button variant="secondary" onClick={() => { setIsRunning(false); setTimer(0); }}>
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HooksDemo;
