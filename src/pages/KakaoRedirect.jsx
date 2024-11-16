// src/pages/KakaoRedirect.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export function KakaoRedirect() {
  const navigate = useNavigate();

  // URL에서 인가코드 뽑기
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("Kakao 인가 코드:", code);

  useEffect(() => {
    // 백엔드 서버로 인가코드 전달
    const sendCodeToBackend = async () => {
      try {
        const response = await axios.post(
          `http://trashhcan-dev.p-e.kr:8080/login/kakao/callback`, // 실제 백엔드 주소 필요
          { code: code }, // POST 요청의 body에 code를 포함
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;
        console.log(data);
        console.log(data.result.user_id);
        console.log(data.result.jwt);

        // 로그인 성공 후 페이지 이동
        navigate('/maketrashcan');
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };

    sendCodeToBackend();
  }, [code, navigate]);

  return (
    <div>
      <h1>로그인 중입니다...</h1>
    </div>
  );
}

export default KakaoRedirect;
