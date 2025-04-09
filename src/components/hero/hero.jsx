import { useState, useEffect } from 'react';
import './hero.css';

export function Hero() {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const titles = [
        "Software Developer",
        "DevOps Engineer",
        "Creative Thinker"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
        }, 2500); // Change title every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="hero-section">
            <div className='presentation'>
                <h1>Hola, 👋</h1>
                <h1>Yo soy Wilson Castillo</h1>
                <div className="animated-title-container">
                    {titles.map((title, index) => (
                        <h2
                            key={index}
                            className={`animated-title ${index === currentTitleIndex ? 'active' : ''}`}
                        >
                            {title}
                        </h2>
                    ))}
                </div>
            </div>

            <div>
                <img className="photo" src="https://st.depositphotos.com/1049680/1336/i/450/depositphotos_13360980-stock-photo-graduate-man-holding-degree.jpg" alt="Yo muy formal" />
            </div>
        </main>
    );
}

export default Hero;