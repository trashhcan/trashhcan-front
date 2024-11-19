//쓸모없는 랜덤 주제 가져오기 (버튼 클릭 최초 한번만 수행
import axios from 'axios';

// const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080'; // 개발용
const BASE_URL = 'https://trashhcandoit.p-e.kr'; //배포용

export const fetchRandomSubTitles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/theme.json`);
    return response.data; //주제리스트가 옴
  } catch (error) {
    console.error('Error fetching random sub titles:', error.message);
    throw error;
  }
};
