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
          `https://trashhcandoit.p-e.kr/login/google/callback`, // 실제 백엔드 주소
          // `http://trashhcan-dev.p-e.kr:8080/login/kakao/callback`, // 개발용 백엔드 주소 
          { code: code },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;
        console.log(data)
        // 세션 스토리지에 저장
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
        console.error("카카오 로그인 오류:", error);
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
