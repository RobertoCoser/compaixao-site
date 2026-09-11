import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import Layout from './components/Layout'
import SEO from './components/SEO'

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

import { noticias } from './data/noticias'

const seoPages = {
  '/': {
    title: null,
    description:
      'Conheça o Projeto COMpaixão, iniciativa do IFRS Campus Bento Gonçalves voltada à solidariedade, cidadania e participação comunitária.',
  },

  '/sobre': {
    title: 'Sobre',
    description:
      'Conheça o Projeto COMpaixão, seus valores, propósito e trajetória junto à comunidade.',
  },

  '/acoes': {
    title: 'Ações',
    description:
      'Conheça as ações e iniciativas desenvolvidas pelo Projeto COMpaixão junto à comunidade.',
  },

  '/noticias': {
    title: 'Notícias',
    description:
      'Acompanhe notícias, campanhas, atividades e novidades do Projeto COMpaixão.',
  },

  '/galeria': {
    title: 'Galeria',
    description:
      'Veja registros de ações, campanhas e momentos que fazem parte do Projeto COMpaixão.',
  },

  '/como-participar': {
    title: 'Como Participar',
    description:
      'Descubra formas de participar, contribuir e apoiar as iniciativas do Projeto COMpaixão.',
  },

  '/contato': {
    title: 'Contato',
    description:
      'Entre em contato com o Projeto COMpaixão para saber mais sobre participação, apoio e iniciativas.',
  },
}

function RouteSEO() {
  const location = useLocation()

  if (location.pathname.startsWith('/admin')) {
    return (
      <SEO
        title="Administração"
        description="Área administrativa do Projeto COMpaixão."
        path={location.pathname}
        noIndex
      />
    )
  }

  if (location.pathname.startsWith('/noticias/')) {
    const slug = location.pathname.replace(
      '/noticias/',
      '',
    )

    const noticia = noticias.find(
      (item) => item.slug === slug,
    )

    if (noticia) {
      return (
        <SEO
          title={noticia.title}
          description={noticia.excerpt}
          path={`/noticias/${noticia.slug}`}
          image={noticia.coverImage}
          type="article"
        />
      )
    }

    return (
      <SEO
        title="Notícia não encontrada"
        description="A notícia solicitada não foi encontrada."
        path={location.pathname}
        noIndex
      />
    )
  }

  const pageSEO =
    seoPages[location.pathname]

  if (!pageSEO) {
    return (
      <SEO
        title="Página não encontrada"
        description="A página solicitada não foi encontrada."
        path={location.pathname}
        noIndex
      />
    )
  }

  return (
    <SEO
      title={pageSEO.title}
      description={pageSEO.description}
      path={location.pathname}
    />
  )
}

function Placeholder({ title }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-earth-900">
        {title}
      </h1>

      <div className="rounded-2xl border border-earth-100 bg-white p-8 text-center shadow-sm">
        <p className="text-earth-500">
          Em desenvolvimento.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <RouteSEO />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/sobre"
            element={<Sobre />}
          />

          <Route
            path="/acoes"
            element={<Acoes />}
          />

          <Route
            path="/noticias"
            element={<Noticias />}
          />

          <Route
            path="/noticias/:slug"
            element={<NoticiaDetalhe />}
          />

          <Route
            path="/galeria"
            element={<Galeria />}
          />

          <Route
            path="/como-participar"
            element={<ComoParticipar />}
          />

          <Route
            path="/contato"
            element={<Contato />}
          />
        </Route>

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/noticias"
            element={<AdminNoticias />}
          />

          <Route
            path="/admin/galeria"
            element={<GaleriaAdmin />}
          />

          <Route
            path="/admin/mensagens"
            element={
              <Placeholder title="Mensagens" />
            }
          />

          <Route
            path="/admin/configuracoes"
            element={
              <Placeholder title="Configurações" />
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App