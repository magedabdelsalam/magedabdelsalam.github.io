import { useState, useEffect } from 'react';

export function useImageNavigation(images, onImageChange) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        onImageChange(newIndex);
      } else if (event.key === 'ArrowLeft') {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        onImageChange(newIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images, onImageChange]);

  return [currentIndex, setCurrentIndex];
}
