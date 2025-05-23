import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AustenFSPage from './components/AustenFSPage';
import AustenEPage from './components/AustenEPage';
import AustenBPage from './components/AustenBPage';
import AustenACPage from './components/AustenACPage';
import AustenGPage from './components/AustenGPage';
import AustenISPage from './components/AustenISPage';
import AustenPPage from './components/AustenPPage';
import ResourcesPage from './components/ResourcesPage';
import SupportPage from './components/SupportPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subsidiary/Austen_FS" element={<AustenFSPage />} />
          <Route path="/subsidiary/Austen_E" element={<AustenEPage />} />
          <Route path="/subsidiary/Austen_B" element={<AustenBPage />} />
          <Route path="/subsidiary/Austen_AC" element={<AustenACPage />} />
          <Route path="/subsidiary/Austen_G" element={<AustenGPage />} />
          <Route path="/subsidiary/Austen_IS" element={<AustenISPage />} />
          <Route path="/subsidiary/Austen_P" element={<AustenPPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_FS/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_E/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_B/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_AC/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_G/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_IS/resources" element={<ResourcesPage />} />
          <Route path="/subsidiary/Austen_P/resources" element={<ResourcesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_FS/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_E/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_B/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_AC/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_G/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_IS/support" element={<SupportPage />} />
          <Route path="/subsidiary/Austen_P/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;