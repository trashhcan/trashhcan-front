import axios from 'axios';

const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080';
// const BASE_URL = 'http://trashhcandoit.p-e.kr:8080'; //배포용

// JWT 토큰 가져오기
const getAuthToken = () => {
    const token = sessionStorage.getItem('authToken');
    console.log('JWT Token:', token); // 확인용 로그
    return token;
};
  
// 닉네임 제출하기
export const postBoxName = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/letterbox`, payload, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    
    sessionStorage.setItem('letter_box', response.data)
    return response.data;
  } catch (error) {
    console.error('Error submitting letter:', error.message);
    throw error;
  }
};