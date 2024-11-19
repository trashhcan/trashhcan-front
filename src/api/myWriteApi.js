//내가 쓴 쓰레기들
import axios from 'axios';

const BASE_URL = 'http://trashhcan-dev.p-e.kr:8080';

export const getMyWriteLetters = async (memberId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/letterbox/list/${memberId}`);
        return response.data.letters || [];
    } catch (error) {
        console.error("Failed to fetch my write letters:", error);
        throw error;
    }
};
