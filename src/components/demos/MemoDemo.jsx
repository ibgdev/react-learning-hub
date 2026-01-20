import React, { useState, useMemo } from 'react';
import Button from '../Button';

const MemoDemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 100000000; i++) { } // Artificial delay
        return num * 2;
    };

    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>Performance Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Prevent unnecessary re-renders with <code>useMemo</code>.</p>

            <div className="card">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <h4 style={{ color: 'var(--accent-primary)' }}>1. Reactive Input</h4>
                        <input
                            type="text"
                            placeholder="Type here..."
                            value={text}
                            onChange={e => setText(e.target.value)}
                            style={{ width: '100%', padding: '10px', background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)', borderRadius: '6px', color: '#fff' }}
                        />
                        <p style={{ fontSize: '0.75rem', marginTop: '10px', opacity: 0.5 }}>
                            Notice: Typing is fast because the heavy calculation only runs when the **Number** changes.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent-primary)' }}>2. Heavy Counter</h4>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Result: {memoizedValue}</div>
                            <Button onClick={() => setCount(c => c + 1)}>Increment Number</Button>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '20px', padding: '15px', background: '#000', borderRadius: '4px' }}>
                    <code style={{ fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
                        const result = useMemo(() =&gt; heavyCompute(num), [num]);
                    </code>
                </div>
            </div>
        </div>
    );
};

export default MemoDemo;
