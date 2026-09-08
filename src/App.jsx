import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Acoes from './pages/Acoes'
import Noticias from './pages/Noticias'
import NoticiaDetalhe from './pages/NoticiaDetalhe'
import Galeria from './pages/Galeria'
import ComoParticipar from './pages/ComoParticipar'
import Contato from './pages/Contato'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import AdminLayout from './pages/admin/AdminLayout'
import AdminNoticias from './pages/admin/AdminNoticias'
import GaleriaAdmin from './pages/admin/GaleriaAdmin'

function Placeholder({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-earth-900 mb-6">{title}</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth-100 text-center">
        <p className="text-earth-500">Em desenvolvimento.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:slug" element={<NoticiaDetalhe />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/como-participar" element={<ComoParticipar />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
      
      <Route path="/admin" element={<AdminLogin />} />
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/noticias" element={<AdminNoticias />} />
        <Route path="/admin/galeria" element={<GaleriaAdmin />} />
        <Route path="/admin/mensagens" element={<Placeholder title="Mensagens" />} />
        <Route path="/admin/configuracoes" element={<Placeholder title="Configurações" />} />
      </Route>
    </Routes>
  )
}

export default App