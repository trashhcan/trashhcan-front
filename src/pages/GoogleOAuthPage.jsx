import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const GoogleOAuthPage = () => {
    const navigate = useNavigate();

    const code = new URL(window.location.href).searchParams.get("code");
    console.log("Google OAuth code:", code);

    const loginHandler = async code => {
        try {
            const response = await axios.post(
                `https://trashhcandoit.p-e.kr/login/google/callback`, // 실제 백엔드 주소
                // `http://trashhcan-dev.p-e.kr:8080/login/google/callback`, // 개발용 벡앤드 주소
                { code: code },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = response.data;
            // console.log(data)
            sessionStorage.setItem("member_id", data.id);
            sessionStorage.setItem("authToken", data.token.accessToken);
            sessionStorage.setItem("refreshToken", data.token.refreshToken);

            // 닉네임 여부로 라우팅 결정
            if (!data.box_name) {
                navigate('/nickname');
            } else {
                sessionStorage.setItem("box_name", data.box_name);
                navigate('/mainpage');
            }
        } catch (error) {
            console.log('구글 로그인 오류:', error);
        }
    };

    useEffect(() => {
        if (code) {
            loginHandler(code);
        } else {
            console.log("로그인 재시도하세요.");
        }
    }, [code, navigate]);

    return (
        <div>
            <h2>로그인중입니다...</h2>
        </div>
    )
}

export default GoogleOAuthPage
