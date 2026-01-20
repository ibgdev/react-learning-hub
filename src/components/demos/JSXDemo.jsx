import React, { useState } from 'react';
import Button from '../Button';
import CodeBlock from '../CodeBlock';

const JSXDemo = () => {
    const [view, setView] = useState('jsx');

    const jsxCode = 'const element = (\n  <h1 className="title" style={{ color: "cyan" }}>\n    Hello World\n  </h1>\n);';

    const jsCode = "const element = React.createElement(\n  'h1',\n  { className: 'title', style: { color: 'cyan' } },\n  'Hello World'\n);";

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>JSX vs Real JS</h2>
            <p style={{ color: 'var(--text-secondary)' }}>JSX looks like HTML, but it's actually a shortcut for JavaScript functions.</p>

            <div className="card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <Button variant={view === 'jsx' ? 'primary' : 'secondary'} onClick={() => setView('jsx')}>
                        JSX Way 🪄
                    </Button>
                    <Button variant={view === 'js' ? 'primary' : 'secondary'} onClick={() => setView('js')}>
                        Pure JS Way 🏗️
                    </Button>
                </div>

                {view === 'jsx' ? (
                    <div>
                        <p>This is what we write. It's clean and easy to read:</p>
                        <CodeBlock
                            language="jsx"
                            code={jsxCode}
                        />
                    </div>
                ) : (
                    <div>
                        <p>This is what the browser actually sees (after Babel transforms it):</p>
                        <CodeBlock
                            language="javascript"
                            code={jsCode}
                        />
                    </div>
                )}

                <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    background: 'var(--bg-primary)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: '1px dashed var(--bg-tertiary)'
                }}>
                    <h1 style={{ color: '#00ffff', margin: 0 }}>Hello World</h1>
                    <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '10px' }}>Rendered result remains the same!</p>
                </div>
            </div>
        </div>
    );
};

export default JSXDemo;
