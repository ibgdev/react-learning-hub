import React, { useState } from 'react';
import Button from '../Button';
import CodeBlock from '../CodeBlock';

const BackendDemo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
            if (!response.ok) throw new Error('Network response was not ok');
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Live Interactive Demo</h2>
            <div className="card">
                <h3>API Fetcher</h3>
                <p>Click the button to fetch 3 posts from a mock API.</p>

                <div style={{ margin: '20px 0' }}>
                    <Button onClick={fetchData} disabled={loading}>
                        {loading ? 'Fetching...' : 'Fetch Posts'}
                    </Button>
                </div>

                {error && (
                    <div style={{ color: 'var(--accent-error)', marginTop: '10px' }}>
                        Error: {error}
                    </div>
                )}

                {data.length > 0 && (
                    <div style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                        {data.map(post => (
                            <div key={post.id} style={{
                                padding: '15px',
                                border: '1px solid var(--bg-tertiary)',
                                borderRadius: '6px',
                                background: 'rgba(255, 255, 255, 0.05)'
                            }}>
                                <h4 style={{ margin: '0 0 5px 0', color: 'var(--accent-primary)' }}>{post.title}</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{post.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BackendDemo;
