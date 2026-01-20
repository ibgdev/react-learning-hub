import React, { useState } from 'react';
import Button from '../Button';

const ContextDemo = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    const themeStyles = {
        dark: {
            bg: '#1a1b26',
            text: '#fff',
            card: '#24283b',
            accent: '#7aa2f7'
        },
        light: {
            bg: '#f0f0f0',
            text: '#000',
            card: '#fff',
            accent: '#3d59a1'
        }
    };

    const current = themeStyles[theme];
    const codeSnippet = `<ThemeContext.Provider value={theme}>\n  <App />\n</ThemeContext.Provider>`;

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Global State with Context</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Avoid "Prop Drilling" by sharing data across the entire app tree.</p>

            <div className="card" style={{ background: current.bg, color: current.text, transition: 'all 0.5s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h4 style={{ margin: 0 }}>App Simulator</h4>
                    <Button onClick={toggleTheme}>Toggle Theme: {theme.toUpperCase()}</Button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                    <div style={{ background: current.card, padding: '20px', borderRadius: '8px', border: `1px solid ${current.accent}` }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Deep Child A</h5>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>I get the theme from Context!</p>
                    </div>
                    <div style={{ background: current.card, padding: '20px', borderRadius: '8px', border: `1px solid ${current.accent}` }}>
                        <h5 style={{ margin: '0 0 10px 0' }}>Deep Child B</h5>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Me too, without props! 🪄</p>
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <pre style={{ fontSize: '0.75rem', background: '#000', padding: '10px', borderRadius: '4px', color: '#fff' }}>
                        {codeSnippet}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ContextDemo;
