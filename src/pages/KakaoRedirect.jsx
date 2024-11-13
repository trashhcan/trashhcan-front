// src/pages/KakaoRedirect.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function KakaoRedirect() {
  const navigate = useNavigate();

  // URL에서 인가코드 뽑기
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("Kakao 인가 코드:", code);

  // 백엔드로 인가코드 전달, 액세스토큰 요청
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };


  useEffect(() => {
    // 백엔드 서버로 인가코드 전달
    fetch(`http://trashhcandoit.p-e.kr:8080/login/kakao/callback/login?code=${code}`, { // 실제백엔드주소필요
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.result.user_id);
        console.log(data.result.jwt);

        //로그인성공 후 페이지 이동
        navigate('/maketrashcan');
      })
      .catch((error) => {
        console.error("오류 발생:", error);
      });
  }, []);

  return (
    <div>
      <h1>로그인 중입니다...</h1>
    </div>
  );
}

export default KakaoRedirect;
