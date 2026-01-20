import React, { useState } from 'react';
import Button from '../Button';

const EnvDemo = () => {
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const commands = {
        'npm create vite@latest': [
            '✔ Project name: … my-react-app',
            '✔ Select a framework: › React',
            '✔ Select a variant: › JavaScript + SWC',
            'Done. Now run:',
            '  cd my-react-app',
            '  npm install',
            '  npm run dev'
        ],
        'npm install': [
            'added 241 packages in 3s',
            'found 0 vulnerabilities'
        ],
        'npm run dev': [
            '  VITE v5.0.0  ready in 150 ms',
            '',
            '  ➜  Local:   http://localhost:5173/',
            '  ➜  Network: use --host to expose'
        ]
    };

    const runCommand = (cmd) => {
        if (isTyping) return;
        setIsTyping(true);
        setTerminalOutput(prev => [...prev, `$ ${cmd}`]);

        setTimeout(() => {
            setTerminalOutput(prev => [...prev, ...commands[cmd]]);
            setIsTyping(false);
        }, 600);
    };

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Terminal Live Simulator</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Click a button below to simulate running terminal commands.</p>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <Button onClick={() => runCommand('npm create vite@latest')}>1. Init Vite</Button>
                <Button onClick={() => runCommand('npm install')}>2. Install</Button>
                <Button onClick={() => runCommand('npm run dev')}>3. Launch</Button>
                <Button variant="secondary" onClick={() => setTerminalOutput([])}>Clear</Button>
            </div>

            <div style={{
                background: '#0d1117',
                color: '#e6edf3',
                padding: '20px',
                borderRadius: '8px',
                fontFamily: "monospace",
                fontSize: '0.9rem',
                minHeight: '200px',
                maxHeight: '400px',
                overflowY: 'auto',
                border: '1px solid var(--bg-tertiary)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
                {terminalOutput.length === 0 && <span style={{ opacity: 0.5 }}>$ _</span>}
                {terminalOutput.map((line, i) => (
                    <div key={i} style={{
                        color: line.startsWith('$') ? 'var(--accent-secondary)' : '#e6edf3',
                        marginBottom: '4px'
                    }}>
                        {line}
                    </div>
                ))}
                {isTyping && <span className="cursor-blink">|</span>}
            </div>
            <style>{`
                .cursor-blink {
                    animation: blink 1s infinite;
                    color: var(--accent-primary);
                }
                @keyframes blink {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default EnvDemo;
