//편지 작성된 내용 백으로 전달

import axios from 'axios';

// const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080'; // 개발용
const BASE_URL = 'https://trashhcandoit.p-e.kr'; // 배포용

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // JWT 토큰 추가
    'Content-Type': 'application/json',
  },
});

//편지 작성된 내용 백으로 전달
export const submitLetter = async (senderId, letterData) => {
  try {
    const response = await apiClient.post(`/api/letter/${senderId}`, letterData);
    return response.data;
  } catch (error) {
    console.error('Error submitting letter:', error.message);
    throw error;
  }
};
