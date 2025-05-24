import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AustenAC from './pages/AustenAC';
import AustenFS from './pages/AustenFS';
import AustenE from './pages/AustenE';
import AustenB from './pages/AustenB';
import AustenG from './pages/AustenG';
import AustenIS from './pages/AustenIS';
import AustenP from './pages/AustenP';
import AustenMain from './pages/AustenMain';
import Resources from './pages/Resources';
import Support from './pages/Support';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/austen-ac" element={<AustenAC />} />
        <Route path="/austen-fs" element={<AustenFS />} />
        <Route path="/austen-e" element={<AustenE />} />
        <Route path="/austen-b" element={<AustenB />} />
        <Route path="/austen-g" element={<AustenG />} />
        <Route path="/austen-is" element={<AustenIS />} />
        <Route path="/austen-p" element={<AustenP />} />
        <Route path="/austen-main" element={<AustenMain />} />
        <Route path="/" element={<AustenMain />} />
        <Route path="/:subsidiary/resources" element={<Resources />} />
        <Route path="/:subsidiary/support" element={<Support />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}