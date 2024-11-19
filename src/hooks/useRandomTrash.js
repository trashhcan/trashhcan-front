//백에서 가져온 쓰레기 이미지 리스트와 상태관리
import { useState, useEffect } from 'react';
import { getTrash } from '../api/letterApi';

const useRandomTrash = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrashes = async () => {
      try {
        const data = await getTrash();
        // console.log(data);
        setImages(data.images);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getTrashes();
  }, []);

  const getNextTrash = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return {
    currentImage: images[currentIndex],
    getNextTrash,
    loading,
    error,
  };
};

export default useRandomTrash;
