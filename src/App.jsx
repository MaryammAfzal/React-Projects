import FirstPage from "./Components/firstPage/firstPage"
import './App.css';
import PlayGame from "./Components/PlayGame/PlayGame";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<FirstPage />} />
    <Route path="/game" element={<PlayGame/>} />
</Routes>
    </Router>
    </>
  )
}

export default App
