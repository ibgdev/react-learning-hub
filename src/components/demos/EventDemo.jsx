import React, { useState } from 'react';
import Button from '../Button';

const EventDemo = () => {
    const [log, setLog] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addLog = (msg) => {
        setLog(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev.slice(0, 4)]);
    };

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Event Handler Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Interact with these elements to trigger React Event Listeners.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="card">
                    <h4 style={{ color: 'var(--accent-secondary)' }}>1. Mouse Events</h4>
                    <Button
                        onMouseEnter={() => addLog('Mouse Entered!')}
                        onClick={() => addLog('Button Clicked!')}
                        style={{ width: '100%', marginBottom: '10px' }}
                    >
                        Hover & Click Me
                    </Button>
                    <div
                        style={{
                            height: '60px',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'crosshair'
                        }}
                        onMouseMove={() => addLog('Moving...')}
                    >
                        Move Mouse Here
                    </div>
                </div>

                <div className="card">
                    <h4 style={{ color: 'var(--accent-secondary)' }}>2. Input Events</h4>
                    <input
                        type="text"
                        placeholder="Type something..."
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            addLog(`Typed: ${e.target.value.slice(-1)}`);
                        }}
                        onFocus={() => addLog('Input Focused!')}
                        onBlur={() => addLog('Input Blurred!')}
                        style={{
                            width: '100%',
                            padding: '12px',
                            background: 'var(--bg-primary)',
                            border: '1px solid var(--bg-tertiary)',
                            borderRadius: '6px',
                            color: '#fff',
                            outline: 'none'
                        }}
                    />
                    <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.5 }}>React uses 'SyntheticEvents' to manage this.</p>
                </div>
            </div>

            <div style={{
                marginTop: '20px',
                background: '#000',
                padding: '15px',
                borderRadius: '8px',
                fontFamily: 'monospace'
            }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '5px', fontSize: '0.8rem' }}>EVENT LOG:</div>
                {log.map((entry, i) => (
                    <div key={i} style={{ fontSize: '0.85rem', color: i === 0 ? '#fff' : '#666' }}>{entry}</div>
                ))}
                {log.length === 0 && <div style={{ opacity: 0.3 }}>Waiting for interaction...</div>}
            </div>
        </div>
    );
};

export default EventDemo;
