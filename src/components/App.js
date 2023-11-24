import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage';

function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  /* RETURN --> HTML */
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
