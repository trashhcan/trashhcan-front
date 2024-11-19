//편지조회용
//내가쓴편지조회와 레이아웃동일?
import axios from 'axios';

const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080'; // 개발용
// const BASE_URL = 'https://trashhcandoit.p-e.kr'; //배포용

export const fetchLetterDetails = async (letterId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/letter/${letterId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch letter details:', error);
        throw error;
    }
};
