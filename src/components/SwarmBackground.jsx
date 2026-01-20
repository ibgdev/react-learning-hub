import React, { useRef, useEffect } from 'react';

const SwarmBackground = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0, active: false, smoothedX: 0, smoothedY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const particleCount = 50; // Clean, high-end look

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-init on resize to handle layout shifts cleanly
            init();
        };

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.2 + 0.8;
                this.accel = 0.0008 + Math.random() * 0.001;
                this.friction = 0.97 + Math.random() * 0.01;
                this.baseOpacity = Math.random() * 0.1 + 0.05;
            }

            update() {
                if (mouse.current.active) {
                    const dx = mouse.current.smoothedX - this.x;
                    const dy = mouse.current.smoothedY - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Larger attraction radius but much weaker pull for "fluid" feel
                    if (distance < 1000) {
                        const force = (1000 - distance) / 1000;
                        this.vx += dx * this.accel * force;
                        this.vy += dy * this.accel * force;
                    }
                    this.vx *= this.friction;
                    this.vy *= this.friction;
                } else {
                    this.vx *= 0.95;
                    this.vy *= 0.95;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Infinite wrap with margin
                const margin = 100;
                if (this.x < -margin) this.x = canvas.width + margin;
                if (this.x > canvas.width + margin) this.x = -margin;
                if (this.y < -margin) this.y = canvas.height + margin;
                if (this.y > canvas.height + margin) this.y = -margin;
            }

            draw() {
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                const opacity = Math.min(0.4, this.baseOpacity + speed * 0.05);

                // Draw sophisticated blur tail
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.vx * 4, this.y - this.vy * 4);
                ctx.strokeStyle = `rgba(88, 196, 220, ${opacity})`;
                ctx.lineWidth = this.size;
                ctx.lineCap = 'round';
                ctx.stroke();

                // Soft glow core
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(88, 196, 220, ${opacity + 0.1})`;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Premium mouse lerping (even smoother)
            mouse.current.smoothedX += (mouse.current.x - mouse.current.smoothedX) * 0.03;
            mouse.current.smoothedY += (mouse.current.y - mouse.current.smoothedY) * 0.03;

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            mouse.current.active = true;
        };

        const handleMouseEnter = () => {
            mouse.current.active = true;
        };

        const handleMouseLeave = () => {
            mouse.current.active = false;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        resize();
        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                opacity: 0.5
            }}
        />
    );
};

export default SwarmBackground;
