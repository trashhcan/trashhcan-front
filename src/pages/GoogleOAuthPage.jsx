import React from 'react'

const GoogleOAuthPage = () => {
    // 현재 url에서 code 부분 추출
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    // 로그인 성공시 구글 로그인 페이지로 이동 (메인페이지 이동)
    const loginSuccess = () => {
        navigate("/googleloginpage");
        window.location.reload();
    };

    const loginHandler = async code => {
        const data = {
            code: code,
        };
        try {
            const res = await axios.post(
                "https://server.sample.net/auth/login", // 여기 토큰을 받는 서버 주소 입력
                data,
            );
            // 토큰 localstorage에 저장
            const accessToken = res.data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            // 신규/기존 회원 여부에 따라 페이지 이동
            loginSuccess();
        } catch (error) {
            console.log(error);
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
