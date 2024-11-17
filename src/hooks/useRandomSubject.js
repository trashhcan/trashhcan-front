//랜덤주제 훅
//주제 상태 공유, 버튼 클릭 추적, 랜덤
//api연결 필요(완)
import { useState, useEffect } from 'react';
import { fetchRandomSubTitles } from '../api/subApi';

const useRandomSubject = () => {
  const [subTitles, setSubTitles] = useState([]);//주제리스트
  const [isSubjectVisible, setIsSubjectVisible] = useState(false); //주제 보이는 여부
  const [subject, setSubject] = useState(''); //현재주제
  const [error, setError] = useState(null);

  //주제리스트 가져오기(api연결해서)
  useEffect(() => {
    const loadSubTitles = async () => {
      try {
        const response = await fetchRandomSubTitles();
        setSubTitles(response);//즈제리스트 저장
      } catch (err) {
        setError(err.message);
      }
    };

    loadSubTitles();
  }, []);

  //주제 랜덤 선택
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

