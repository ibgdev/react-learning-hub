import React, { useState } from 'react';

const RouterDemo = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
            case 'home': return <div style={{ animation: 'fadeIn 0.3s' }}>🏠 Home: Welcome to the App</div>;
            case 'profile': return <div style={{ animation: 'fadeIn 0.3s' }}>👤 Profile: User Settings</div>;
            case 'settings': return <div style={{ animation: 'fadeIn 0.3s' }}>⚙️ Settings: Adjust Preferences</div>;
            default: return null;
        }
    };

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Routing Simulator</h2>
            <p style={{ color: 'var(--text-secondary)' }}>How Single Page Applications (SPA) switch views without refreshing.</p>

            <div style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--bg-tertiary)'
            }}>
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '10px 20px',
                    display: 'flex',
                    gap: '20px',
                    borderBottom: '1px solid var(--bg-tertiary)'
                }}>
                    <div
                        onClick={() => setActiveTab('home')}
                        style={{ cursor: 'pointer', color: activeTab === 'home' ? 'var(--accent-primary)' : '#666' }}
                    >
                        /home
                    </div>
                    <div
                        onClick={() => setActiveTab('profile')}
                        style={{ cursor: 'pointer', color: activeTab === 'profile' ? 'var(--accent-primary)' : '#666' }}
                    >
                        /profile
                    </div>
                    <div
                        onClick={() => setActiveTab('settings')}
                        style={{ cursor: 'pointer', color: activeTab === 'settings' ? 'var(--accent-primary)' : '#666' }}
                    >
                        /settings
                    </div>
                </div>
                <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-primary)', minHeight: '120px' }}>
                    {renderContent()}
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <pre style={{ fontSize: '0.8rem', background: '#000', padding: '10px', borderRadius: '4px' }}>
                    {`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/settings" element={<Settings />} />
</Routes>`}
                </pre>
            </div>
        </div>
    );
};

export default RouterDemo;
