import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import ParticleBackground from './components/ParticleBackground';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <>
    <ThemeProvider>
    <ParticleBackground />
    <main className='main-container'>
      
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      
    </main>

    </ThemeProvider>
    </>
  )
}

export default App
