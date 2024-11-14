import './App.css'
import styled from 'styled-components'
import GoogleLoginPage from './pages/GoogleLoginPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import KakaoLoginPage from './pages/KakaoLoginPage';
import MakeTrashcan from './pages/MakeTrashcan';
import KakaoRedirect from './pages/KakaoRedirect';
import GoogleOAuthPage from './pages/GoogleOAuthPage';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import ChoiceLetter from './pages/ChoiceLetter';
import WriteLetter from './pages/WriteLetter';


function App() {
  return (
    <Outside>
      <AppDom>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/googleloginpage" element={<GoogleLoginPage />} />
          <Route path="/oauth" element={<GoogleOAuthPage />} />
          <Route path="/kakaologinpage" element={<KakaoLoginPage />} />
          <Route path="/maketrashcan" element={<MakeTrashcan />} />
          <Route path="/home" element={<Home />} />
          <Route path="/path" element={<KakaoRedirect />} />
          <Route path="/ChoiceLetter" element={<ChoiceLetter />} />
          <Route path="/WriteLetter" element={<WriteLetter/>} />
        </Routes>
      </AppDom>
    </Outside>
  )
}

export default App

const AppDom = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    width: 100vw;
    height: 100dvh;
  }
`;

const Outside = styled.div`
  background-color: white;
`;