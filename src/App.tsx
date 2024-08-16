import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ListarCategorias from './components/categorias/ListarCategorias';
import FormCategoria from './components/categorias/FormCategoria';
import ListarProdutos from './components/produtos/ListarProdutos';
import FormProduto from './components/produtos/FormProduto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/categorias/nova" element={<FormCategoria onSubmit={() => { /* handleSubmit */ }} />} />
            <Route path="/categorias/editar/:id" element={<FormCategoria onSubmit={() => { /* handleSubmit */ }} />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/produtos/novo" element={<FormProduto onSubmit={() => { /* handleSubmit */ }} />} />
            <Route path="/produtos/editar/:id" element={<FormProduto onSubmit={() => { /* handleSubmit */ }} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;