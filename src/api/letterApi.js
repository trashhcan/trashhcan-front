import axios from 'axios';

const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080';
// const BASE_URL = 'http://trashhcandoit.p-e.kr:8080'; //배포용

// JWT 토큰 가져오기
const getAuthToken = () => {
    const token = localStorage.getItem('authToken');
    console.log('JWT Token:', token); // 확인용 로그
    return token;
  };
  
// JWT 토큰 가져오기
const getAuthTokenFromSS = () => {
    const token = sessionStorage.getItem('authToken');
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

// GET 특정 멤버의 편지박스 편지 목록
// getAuthToken이 실패하면 false를 반환합니다.
export const getLetterBoxByMemberId = async (memberId) => {
  const authToken = getAuthTokenFromSS(); // 한 번 호출 후 변수에 저장

  if (!authToken) {
    console.warn('[WARNING] Authorization token is undefined or not found.');
    return false; // authToken이 없으면 false 반환
  }

  try {
    const response = await axios.get(`${BASE_URL}/api/letterbox/${memberId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
    // console.log(response);
    return response.data; // API 요청 성공 시 데이터 반환
  } catch (error) {
    console.error('[ERROR] letterApi/getLetterBoxByMemberId error:', error.message);
    throw error; // 에러를 호출한 곳으로 다시 던짐
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