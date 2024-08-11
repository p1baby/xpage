import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import './styles/default.scss'
import './styles/variables.scss'

import { Footer, Navbar } from './components'

const App: FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent: FC = () => {
  return (
    <section className='wrapper'>
    <nav>
      <Navbar />
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </section>
  );
}

export default App;
