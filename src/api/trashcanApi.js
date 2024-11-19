//내 쓸애기통 api요청
import axios from "axios";

// const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080'; // 개발용
const BASE_URL = 'https://trashhcandoit.p-e.kr'; //배포용

export const getTrashData = async (memberId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/letterbox/${memberId}`);
      // console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching trash data:", error);
      throw error;
    }
  };
  