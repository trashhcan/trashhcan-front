import axios from 'axios';

const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080';
// const BASE_URL = 'http://trashhcandoit.p-e.kr:8080'; //배포용

// JWT 토큰 가져오기
const getAuthToken = () => {
    const token = localStorage.getItem('authToken');
    console.log('JWT Token:', token); // 확인용 로그
    return token;
  };
  

// 이미지 리스트 가져오기
export const fetchLetterImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/letter/image`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`, //올바른 JWT 토큰 설정
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching letter images:', error.message);
    throw error;
  }
};


// 편지 제출하기
export const postLetter = async (senderId, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/letter/${senderId}`, payload, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting letter:', error.message);
    throw error;
  }
};


// GET 쓰레기 아이콘
export const getIcons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/letter/image`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching letter images:', error.message);
    throw error;
  }
}