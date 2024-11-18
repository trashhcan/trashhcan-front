import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLetterBoxByMemberId } from '../api/letterApi';

const VisitorPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // 동적 경로에서 id 추출
    const [visitorData, setVisitorData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getLetterBoxByMemberId(id);
                if (!response) { // 인증 실패 또는 데이터 없음 → 로그인 페이지로 리다이렉트
                    navigate("/");
                } else { // 데이터가 있으면 상태 업데이트
                    setVisitorData(response);
                }
            } catch (error) {
                console.error('[ERROR] VisitorPage fetchData:', error.message);
            }
        };

        fetchData();
    }, [id, navigate]);

    return (
        <div>
            {visitorData ? (
                <div>
                    <h1>방문자로 진입한 페이지입니다.!</h1>
                </div>
            ) : (
                <p>방문자 쓰레기통 조회에 실패했습니다!...</p>
            )}
        </div>
    );
};

export default VisitorPage;
