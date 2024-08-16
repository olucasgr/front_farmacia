import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Farmácia</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/categorias" className="hover:text-gray-300">Categorias</Link></li>
          <li><Link to="/produtos" className="hover:text-gray-300">Produtos</Link></li>
        </ul>
      </div>
    </nav>
  );
}