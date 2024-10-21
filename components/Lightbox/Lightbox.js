import { useState, useEffect } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({ src, alt, onClose, onPrev, onNext }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handleImageClick = (e) => {
    const { clientX } = e;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickPosition = clientX - left;

    if (clickPosition < width / 2) {
      onPrev();
    } else {
      onNext();
    }
  };

  return (
    <div className={styles.lightbox} onClick={onClose}>
        <img
            src={src}
            alt={alt}
            className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
            onLoad={() => setIsLoaded(true)}
            onClick={(e) => {
            e.stopPropagation();
            handleImageClick(e);
            }}
        />
    </div>
  );
}
