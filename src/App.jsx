import './App.css'
import styled from 'styled-components'
import GoogleLoginPage from './pages/GoogleLoginPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Outside>
      <AppDom>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/googleloginpage" element={<GoogleLoginPage />} />
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