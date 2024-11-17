//랜덤주제 훅
//주제 상태 공유, 버튼 클릭 추적, 랜덤
//api연결 필요(완)
import { useState, useEffect } from 'react';
import { fetchRandomSubTitles } from '../api/subApi'; // API 요청 함수 가져오기

const useRandomSubject = () => {
  const [subTitles, setSubTitles] = useState([]); // 주제 리스트
  const [isSubjectVisible, setIsSubjectVisible] = useState(false); // 주제 보임 여부
  const [subject, setSubject] = useState(''); // 현재 주제
  const [error, setError] = useState(null); // 에러 상태

  // 주제 리스트를 API로부터 로드
  useEffect(() => {
    const loadSubTitles = async () => {
      try {
        const response = await fetchRandomSubTitles(); // API 호출
        setSubTitles(response); // 리스트 저장
      } catch (err) {
        setError(err.message); // 에러 저장
      }
    };

    loadSubTitles();
  }, []);

  // 주제 토글 및 랜덤 선택
  const toggleSubject = () => {
    if (!isSubjectVisible) {
      if (subTitles.length > 0) {
        const randomIndex = Math.floor(Math.random() * subTitles.length);
        const randomSubject = subTitles[randomIndex];
        setSubject(randomSubject);
      }
    }
    setIsSubjectVisible((prev) => !prev);
  };

  return { isSubjectVisible, subject, toggleSubject, error };
};

export default useRandomSubject;

