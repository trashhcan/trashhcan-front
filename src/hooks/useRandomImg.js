//백에서 가져온 이미지 리스트와 상태관리
import { useState, useEffect } from 'react';
import { fetchLetterImages } from '../api/letterApi';

const useRandomImg = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchLetterImages();
        setImages(data.images);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return {
    currentImage: images[currentIndex],
    getNextImage,
    loading,
    error,
  };
};

export default useRandomImg;
