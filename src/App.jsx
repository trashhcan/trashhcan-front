import './App.css'
import styled from 'styled-components'
import GoogleLoginPage from './pages/GoogleLoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import KakaoLoginPage from './pages/KakaoLoginPage';
import MakeTrashcan from './pages/MakeTrashcan';
import KakaoRedirect from './pages/KakaoRedirect';
import GoogleOAuthPage from './pages/GoogleOAuthPage';
import NickNamePage from './pages/NickNamePage';
import ChoiceLetter from './pages/ChoiceLetter';
import WriteLetter from './pages/WriteLetter';
import InitialPage from './pages/InitialPage';
import MainPage from './pages/MainPage';
import { useState } from 'react';
import MenuPage from './pages/MenuPage';
import VisitorPage from './pages/VisitorPage';
import LetterDetail from './pages/LetterDetails';
import EndPage from './pages/EndPage';

function App() {
  //편지지 이미지 페이지 간 전송필요함
  const [selectedTrash, setSelectedTrash] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleTrashSelect = (trash) => {
    setSelectedTrash(trash);
    navigate('/ChoiceLetter');
  }

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    navigate('/WriteLetter');
  }

  return (
    <Outside>
      <AppDom>
        <Routes>
          <Route path="/" element={<InitialPage />} />

          <Route path="/kakaologinpage" element={<KakaoLoginPage />} />
          <Route path="/path" element={<KakaoRedirect />} />
          <Route path="/googleloginpage" element={<GoogleLoginPage />} />
          <Route path="/oauth" element={<GoogleOAuthPage />} />

          <Route path="/nickname" element={<NickNamePage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />

          <Route path="/member/:id" element={<VisitorPage />} />

          <Route path="/maketrashcan" element={<MakeTrashcan onSelectTrash={handleTrashSelect} />} />
          <Route path="/ChoiceLetter" element={<ChoiceLetter onSelectImage={handleImageSelect} />} />
          <Route path="/WriteLetter" element={<WriteLetter selectedImage={selectedImage} />} />
          <Route path="/end" element={<EndPage />} />

          <Route path="/maketrashcan" element={<MakeTrashcan />} />
          <Route path="/ChoiceLetter" element={<ChoiceLetter />} />
          <Route path="/WriteLetter" element={<WriteLetter />} />

          <Route path="/mainpage/letter/:letter_id" element={<LetterDetail />} />
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