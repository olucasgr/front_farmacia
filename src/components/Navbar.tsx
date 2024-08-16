import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Farmácia
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/categorias" className="hover:text-accent">Categorias</Link></li>
          <li><Link to="/produtos" className="hover:text-accent">Produtos</Link></li>
        </ul>
      </div>
    </nav>
  );
}