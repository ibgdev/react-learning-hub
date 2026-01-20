import React, { useState } from 'react';
import Button from '../Button';

const CardComponent = ({ title, color }) => (
    <div style={{
        padding: '15px',
        borderRadius: '10px',
        background: 'var(--bg-primary)',
        border: `1px solid ${color}`,
        boxShadow: `0 4px 15px ${color}22`,
        textAlign: 'center',
        transition: 'transform 0.2s'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
        <h4 style={{ color: color, margin: '0 0 10px 0' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>I am a reusable block!</p>
    </div>
);

const ComponentDemo = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Component A', color: '#58c4dc' },
        { id: 2, title: 'Component B', color: '#087ea4' }
    ]);

    const addCard = () => {
        const colors = ['#58c4dc', '#087ea4', '#61dafb', '#4fade6', '#3d96d1'];
        const newId = cards.length + 1;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCards([...cards, { id: newId, title: `Component ${String.fromCharCode(64 + newId)}`, color: randomColor }]);
    };

    const codeSnippet = `<div className="grid">\n  {cards.map(card => (\n    <MyCard key={card.id} title={card.title} />\n  ))}\n</div>`;

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Interactive: Think in Components</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Components are like LEGO bricks. Write once, use everywhere.</p>

            <div className="card">
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <Button onClick={addCard}>+ Instantiate New Component</Button>
                    <Button variant="secondary" onClick={() => setCards(cards.slice(0, 2))} style={{ marginLeft: '10px' }}>Reset</Button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '15px',
                    minHeight: '120px',
                    padding: '10px'
                }}>
                    {cards.map(card => (
                        <CardComponent key={card.id} title={card.title} color={card.color} />
                    ))}
                </div>

                <div style={{ marginTop: '20px', borderTop: '1px solid var(--bg-tertiary)', paddingTop: '15px' }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>The logic remains the same, but the UI multiplies:</p>
                    <pre style={{ fontSize: '0.8rem', background: '#000', padding: '10px', borderRadius: '4px', overflowX: 'auto' }}>
                        {codeSnippet}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ComponentDemo;
