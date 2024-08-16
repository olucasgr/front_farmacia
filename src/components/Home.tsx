import { Link } from "react-router-dom";

// src/components/Home.tsx
export default function Home() {
    return (
      <div className="bg-neutral min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-primary mb-4">Bem-vindo à Farmácia</h1>
          <p className="text-lg text-dark mb-4">Explore nossos produtos e encontre o que precisa para sua saúde.</p>
          <Link to="/produtos" className="bg-primary text-white py-2 px-4 rounded hover:bg-accent">
            Ver Produtos
          </Link>
        </div>
      </div>
    );
  }
  