import React, { useState, useEffect } from 'react';
import Button from './Button';

const CodeChallenge = ({ challenge }) => {
    const [status, setStatus] = useState('idle'); // idle, correct, wrong
    const [input, setInput] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        // Reset state when challenge changes
        setStatus('idle');
        setFeedback('');
        setSelectedOption(null);
        if (challenge?.type === 'code') {
            setInput(challenge.initialCode || '');
        } else {
            setInput('');
        }
    }, [challenge]);

    if (!challenge) return null;

    const handleSubmit = () => {
        if (challenge.type === 'quiz') {
            if (selectedOption === challenge.correct) {
                setStatus('correct');
                setFeedback('Brilliant! You got it right. ⚛️');
            } else {
                setStatus('wrong');
                setFeedback('Not quite. Try reading the module again or check the hint! 💡');
            }
        } else if (challenge.type === 'code') {
            // Check solution using regex
            if (challenge.solution.test(input)) {
                setStatus('correct');
                setFeedback('Success! Your code logic is correct. 🚀');
            } else {
                setStatus('wrong');
                setFeedback('Logic mismatch. Check your syntax or the hint below. 🛠️');
            }
        }
    };

    return (
        <div className="card glass glow" style={{
            marginTop: '40px',
            border: '2px solid var(--accent-primary)',
            background: 'rgba(88, 196, 220, 0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{
                    background: 'var(--accent-primary)',
                    color: '#000',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                }}>
                    CHALLENGE
                </span>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{challenge.title}</h3>
            </div>

            <p style={{ fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' }}>
                {challenge.problem}
            </p>

            {challenge.type === 'quiz' ? (
                <div style={{ display: 'grid', gap: '12px', marginBottom: '30px' }}>
                    {challenge.options.map((opt, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                if (status !== 'correct') {
                                    setSelectedOption(idx);
                                    setStatus('idle');
                                }
                            }}
                            style={{
                                padding: '15px 20px',
                                background: selectedOption === idx ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                                color: selectedOption === idx ? '#000' : 'var(--text-primary)',
                                borderRadius: '8px',
                                cursor: status === 'correct' ? 'default' : 'pointer',
                                transition: 'all 0.2s ease',
                                border: '1px solid rgba(255,255,255,0.05)',
                                fontWeight: selectedOption === idx ? '600' : '400'
                            }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ position: 'relative', marginBottom: '30px' }}>
                    <textarea
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            setStatus('idle');
                        }}
                        placeholder="Type your solution here..."
                        style={{
                            width: '100%',
                            minHeight: '200px',
                            background: '#16181d',
                            color: '#58c4dc',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid var(--bg-tertiary)',
                            fontFamily: '"Fira Code", monospace',
                            fontSize: '0.95rem',
                            resize: 'vertical',
                            lineHeight: '1.5',
                            outline: 'none'
                        }}
                    />
                </div>
            )}

            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                {status !== 'correct' && (
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        style={{ padding: '12px 30px' }}
                    >
                        Submit Solution
                    </Button>
                )}

                {status === 'wrong' && (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Hint: {challenge.hint}
                    </span>
                )}
            </div>

            {feedback && (
                <div style={{
                    marginTop: '25px',
                    padding: '15px',
                    borderRadius: '8px',
                    background: status === 'correct' ? 'rgba(0, 255, 157, 0.1)' : 'rgba(255, 85, 85, 0.1)',
                    border: `1px solid ${status === 'correct' ? '#00ff9d' : '#ff5555'}`,
                    color: status === 'correct' ? '#00ff9d' : '#ff5555',
                    fontWeight: '500'
                }}>
                    {feedback}
                </div>
            )}
        </div>
    );
};

export default CodeChallenge;
