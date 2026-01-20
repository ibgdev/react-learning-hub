import React, { useState } from 'react';
import Button from '../Button';

const ChildCard = ({ name, color, emoji }) => (
    <div style={{
        padding: '20px',
        borderRadius: '12px',
        background: 'var(--bg-primary)',
        border: `2px solid ${color}`,
        textAlign: 'center',
        transition: 'all 0.3s ease'
    }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{emoji}</div>
        <h3 style={{ margin: 0, color: '#fff' }}>I am {name}</h3>
        <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '5px' }}>
            My color is passed via <strong>Props</strong>!
        </p>
    </div>
);

const PropsDemo = () => {
    const [childData, setChildData] = useState({ name: 'Alpha', color: '#58c4dc', emoji: '🤖' });

    const codeString = `<Child \n  name="${childData.name}" \n  color="${childData.color}" \n  emoji="${childData.emoji}" \n/>`;

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>Interactive Props Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Click a button in the **Parent** to pass new props to the **Child**.</p>

            <div className="card" style={{ borderStyle: 'dashed' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5 }}>Parent Component</span>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <Button onClick={() => setChildData({ name: 'Robo', color: '#58c4dc', emoji: '🤖' })}>Send Robo</Button>
                        <Button onClick={() => setChildData({ name: 'Alien', color: '#bd93f9', emoji: '👾' })}>Send Alien</Button>
                        <Button onClick={() => setChildData({ name: 'Ghost', color: '#ff79c6', emoji: '👻' })}>Send Ghost</Button>
                    </div>
                </div>

                <div style={{
                    background: 'var(--bg-tertiary)',
                    padding: '30px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '15px' }}>Child Component</span>
                    <ChildCard {...childData} />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '0.9rem' }}>The Parent defines the data, the Child just displays it:</p>
                    <pre style={{ fontSize: '0.8rem', background: '#000', padding: '10px', borderRadius: '4px' }}>
                        {codeString}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;
