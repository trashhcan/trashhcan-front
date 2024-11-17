//쓸모없는 랜덤 주제 가져오기 (버튼 클릭 최초 한번만 수행
import axios from 'axios';

const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080';

// 랜덤 주제 리스트 요청
export const fetchRandomSubTitles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/theme.json`);
    return response.data; // API에서 받은 주제 리스트 반환
  } catch (error) {
    console.error('Error fetching random sub titles:', error.message);
    throw error;
  }
};
