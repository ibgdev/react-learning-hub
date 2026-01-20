import React, { useState } from 'react';
import Button from '../Button';

const FormsDemo = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
        if (formData.password.length < 6) newErrors.password = 'Password must be 6+ chars';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
            setTimeout(() => setSubmitted(false), 3000);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Form & Validation Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Controlled components with real-time validation.</p>

            <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(0,255,157,0.1)', borderRadius: '8px' }}>
                        <div style={{ fontSize: '2rem' }}>🎉</div>
                        <h3>Successfully Sent!</h3>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Email</label>
                            <input
                                type="text"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    background: 'var(--bg-primary)',
                                    border: errors.email ? '1px solid var(--accent-error)' : '1px solid var(--bg-tertiary)',
                                    borderRadius: '6px',
                                    color: '#fff'
                                }}
                            />
                            {errors.email && <p style={{ color: 'var(--accent-error)', fontSize: '0.75rem', marginTop: '5px' }}>{errors.email}</p>}
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    background: 'var(--bg-primary)',
                                    border: errors.password ? '1px solid var(--accent-error)' : '1px solid var(--bg-tertiary)',
                                    borderRadius: '6px',
                                    color: '#fff'
                                }}
                            />
                            {errors.password && <p style={{ color: 'var(--accent-error)', fontSize: '0.75rem', marginTop: '5px' }}>{errors.password}</p>}
                        </div>

                        <Button type="submit">Register Now</Button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default FormsDemo;
