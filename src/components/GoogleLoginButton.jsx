import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// @react-oauth/google 라이브러리로 프론트에서 직접 JWT 토큰을 받아옵니다.
const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const clientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

    const googleLoginHandler = (res) => {
        const token = res.credential;
        const decode = jwtDecode(token);

        localStorage.setItem('user', JSON.stringify(decode));
        navigate('/googleloginpage');
    }

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
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