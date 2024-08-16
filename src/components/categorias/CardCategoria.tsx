// src/components/categorias/CardCategoria.tsx
import { Categoria } from '../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

export default function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-dark mb-2">{categoria.nome}</h3>
    </div>
  );
}
