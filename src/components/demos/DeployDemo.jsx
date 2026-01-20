import React, { useState } from 'react';
import Button from '../Button';

const DeployDemo = () => {
    const [step, setStep] = useState(0);

    const steps = [
        { label: 'Build', icon: '🏗️', detail: 'Running "npm run build" to minify code.' },
        { label: 'Push', icon: '🚀', detail: 'Pushing code to GitHub repository.' },
        { label: 'Deploy', icon: '🌐', detail: 'Vercel/Netlify picking up the latest changes.' },
        { label: 'Live', icon: '✨', detail: 'Your app is live on my-cool-app.vercel.app!' }
    ];

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Deployment Pipeline</h2>
            <p style={{ color: 'var(--text-secondary)' }}>How your code goes from your laptop to the real world.</p>

            <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    {steps.map((s, i) => (
                        <div key={i} style={{
                            opacity: step >= i ? 1 : 0.3,
                            transition: 'all 0.5s ease',
                            transform: step === i ? 'scale(1.2)' : 'scale(1)'
                        }}>
                            <div style={{ fontSize: '2rem' }}>{s.icon}</div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                <div style={{ minHeight: '60px', padding: '20px', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--bg-tertiary)' }}>
                    <strong>{steps[step].label} Phase:</strong> {steps[step].detail}
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Button
                        onClick={() => setStep((step + 1) % steps.length)}
                    >
                        {step === steps.length - 1 ? 'Restart Pipeline' : 'Next Stage →'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeployDemo;
