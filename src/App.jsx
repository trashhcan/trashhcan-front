import './App.css'
import styled from 'styled-components'
import GoogleLoginPage from './pages/GoogleLoginPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import KakaoLoginPage from './pages/KakaoLoginPage';
import MakeTrashcan from './pages/MakeTrashcan';


function App() {
  return (
    <Outside>
      <AppDom>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/googleloginpage" element={<GoogleLoginPage />} />
          <Route path="/kakaologinpage" element={<KakaoLoginPage />} />
          <Route path="/maketrashcan" element={<MakeTrashcan />} />
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
  background-color: #eaeaea;

  @media (max-width: 600px) {
    width: 100vw;
    height: 100dvh;
  }
`;

const Outside = styled.div`
  background-color: white;
`;