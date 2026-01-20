import React, { useState } from 'react';
import Button from '../Button';

const ConditionalDemo = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoggedIn(!isLoggedIn);
            setIsLoading(false);
        }, 1000);
    };

    const logicString = '{isLoading ? (\n  <Spinner />\n) : isLoggedIn ? (\n  <Dashboard />\n) : (\n  <LoginForm />\n)}';

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>Conditional Rendering Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Toggle the state to see how the UI reacts to different conditions.</p>

            <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '30px' }}>
                    <Button onClick={handleLogin} disabled={isLoading}>
                        {isLoading ? 'Processing...' : isLoggedIn ? 'Logout 🚪' : 'Login 🔑'}
                    </Button>
                </div>

                <div style={{
                    padding: '40px',
                    background: 'var(--bg-primary)',
                    borderRadius: '12px',
                    border: '1px dashed var(--bg-tertiary)',
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {isLoading ? (
                        <div style={{ textAlign: 'center' }}>
                            <div className="spinner"></div>
                            <p style={{ marginTop: '15px', color: 'var(--accent-primary)' }}>Loading Dashboard...</p>
                        </div>
                    ) : isLoggedIn ? (
                        <div style={{ animation: 'fadeIn 0.5s ease' }}>
                            <div style={{ fontSize: '3rem' }}>💎</div>
                            <h3 style={{ margin: '10px 0' }}>Welcome, Member!</h3>
                            <p style={{ opacity: 0.6 }}>You are seeing the "Authenticated" view.</p>
                        </div>
                    ) : (
                        <div style={{ opacity: 0.5 }}>
                            <div style={{ fontSize: '3rem' }}>🔒</div>
                            <h3>Please Sign In</h3>
                            <p>Content is hidden behind a condition.</p>
                        </div>
                    )}
                </div>

                <div style={{ marginTop: '30px', textAlign: 'left' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>Code Logic Used:</p>
                    <pre style={{ fontSize: '0.8rem', background: '#000', padding: '10px', borderRadius: '4px' }}>
                        {logicString}
                    </pre>
                </div>
            </div>
            <style>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(88, 196, 220, 0.1);
          border-left: 4px solid var(--accent-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default ConditionalDemo;
