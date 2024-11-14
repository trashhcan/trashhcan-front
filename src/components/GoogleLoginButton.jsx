import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// @react-oauth/google 라이브러리로 프론트에서 직접 JWT 토큰을 받아옵니다.
const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const CLIENT_ID = import.meta.env.VITE_APP_G_CLIENT_ID;

    const googleLoginHandler = (res) => {
        const token = res.credential;
        const decode = jwtDecode(token);
        // Todo: 사용자 닉네임 검증 -> 닉네임이 없으면 닉네임페이지로, 있으면 홈 페이지로 이동합니다.
        
        localStorage.setItem('user', JSON.stringify(decode));
        navigate('/home');

    }

    return (
        <>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(res) => googleLoginHandler(res)}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton