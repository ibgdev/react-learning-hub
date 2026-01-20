import React, { useState } from 'react';
import Button from '../Button';
import CodeBlock from '../CodeBlock';

const JSDemo = () => {
    const [demoStep, setDemoStep] = useState('raw');

    const users = [
        { id: 1, name: 'Alice', role: 'Dev' },
        { id: 2, name: 'Bob', role: 'Designer' },
        { id: 3, name: 'Charlie', role: 'PM' }
    ];

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>Interactive JS Playground</h2>
            <p style={{ color: 'var(--text-secondary)' }}>See how modern JS transforms data before it hits React JSX.</p>

            <div className="card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <Button variant={demoStep === 'raw' ? 'primary' : 'secondary'} onClick={() => setDemoStep('raw')}>
                        1. Raw Data
                    </Button>
                    <Button variant={demoStep === 'destructure' ? 'primary' : 'secondary'} onClick={() => setDemoStep('destructure')}>
                        2. Destructure
                    </Button>
                    <Button variant={demoStep === 'map' ? 'primary' : 'secondary'} onClick={() => setDemoStep('map')}>
                        3. Map to UI
                    </Button>
                </div>

                {demoStep === 'raw' && (
                    <div>
                        <p>Imagine we have this list of users from an API:</p>
                        <CodeBlock code={`const users = [\n  { id: 1, name: 'Alice', role: 'Dev' },\n  { id: 2, name: 'Bob', role: 'Designer' }\n];`} language="javascript" />
                    </div>
                )}

                {demoStep === 'destructure' && (
                    <div>
                        <p>Instead of <code>user.name</code>, we extract variables cleanly:</p>
                        <CodeBlock code={`const { name, role } = user;\nconsole.log(name); // 'Alice'`} language="javascript" />
                        <div style={{ padding: '10px', background: 'rgba(189, 147, 249, 0.1)', borderRadius: '4px', borderLeft: '3px solid var(--accent-secondary)' }}>
                            💡 React uses this heavily for <strong>Props</strong>!
                        </div>
                    </div>
                )}

                {demoStep === 'map' && (
                    <div>
                        <p>We transform the array into JSX elements:</p>
                        <CodeBlock code={`users.map(({ id, name }) => (\n  <li key={id}>{name}</li>\n));`} language="javascript" />
                        <div style={{ marginTop: '15px' }}>
                            <strong>Resulting UI:</strong>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                                {users.map(({ id, name, role }) => (
                                    <li key={id} style={{
                                        padding: '8px 12px',
                                        background: 'var(--bg-primary)',
                                        marginBottom: '5px',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <span>{name}</span>
                                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem' }}>{role}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JSDemo;
