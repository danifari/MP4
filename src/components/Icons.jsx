import { useEffect, useState } from 'react';
import './Icons.css'

function Icons({ variant = 'floating' }) {
    const isFooter = variant === 'footer';
    const [isHiddenByFooter, setIsHiddenByFooter] = useState(false);

    useEffect(() => {
        if (isFooter) return;

        const footerElement = document.querySelector('.footer');

        if (!footerElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHiddenByFooter(entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '0px 0px -12px 0px',
            }
        );

        observer.observe(footerElement);

        return () => observer.disconnect();
    }, [isFooter]);

    return (
        <div className={`icons${isFooter ? ' icons--footer' : ''}${isHiddenByFooter ? ' icons--hidden' : ''}`}>
            <a href="https://www.youtube.com/watch?v=CWExUQcTxB8" id="youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://open.spotify.com/artist/6lBptQoWw0G3129704485" id="spotify" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <i className="fa-brands fa-spotify"></i>
            </a>
            <a href="https://www.instagram.com/mp4session/?hl=it" id="ig" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>
            
            
        </div>
    );
}

export default Icons;