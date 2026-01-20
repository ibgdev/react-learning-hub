import React, { useState } from 'react';
import Button from '../Button';

const ListDemo = () => {
    const [tasks, setTasks] = useState([
        { id: 101, text: 'Learn React Core', completed: true },
        { id: 102, text: 'Master JSX', completed: true },
        { id: 103, text: 'Understand Props', completed: false }
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const addTask = () => {
        const text = prompt('Enter a new task:');
        if (text) {
            setTasks([...tasks, { id: Date.now(), text, completed: false }]);
        }
    };

    return (
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--bg-tertiary)' }}>
            <h2 style={{ color: 'var(--accent-primary)' }}>Dynamic Lists Lab</h2>
            <p style={{ color: 'var(--text-secondary)' }}>How React renders collections using the <code>.map()</code> function.</p>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h4 style={{ margin: 0 }}>My Learning Path</h4>
                    <Button onClick={addTask} style={{ fontSize: '0.8rem', padding: '5px 15px' }}>+ New Item</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            style={{
                                padding: '12px 15px',
                                background: 'var(--bg-primary)',
                                borderRadius: '8px',
                                border: task.completed ? '1px solid var(--accent-primary)' : '1px solid var(--bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                opacity: task.completed ? 0.7 : 1
                            }}
                        >
                            <div style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                border: '2px solid var(--accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: task.completed ? 'var(--accent-primary)' : 'transparent'
                            }}>
                                {task.completed && <span style={{ color: '#000', fontSize: '12px', fontWeight: 'bold' }}>✓</span>}
                            </div>
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                            <span style={{ marginLeft: 'auto', fontSize: '0.7rem', opacity: 0.3 }}>ID: {task.id}</span>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0, 255, 157, 0.05)', borderRadius: '6px', borderLeft: '3px solid var(--accent-primary)' }}>
                    <p style={{ margin: 0, fontSize: '0.85rem' }}>
                        <strong>The "Key" Prop:</strong> Each task has a unique <code>id</code>.
                        React uses this to track which item in the list changed, allowing it to re-render <em>only</em> that item.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ListDemo;
