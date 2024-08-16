// src/components/categorias/ListarCategorias.tsx
import { useEffect, useState } from 'react';
import { listarCategorias } from '../../services/CetegoriaService';
import { Categoria } from '../../models/Categoria';
import CardCategoria from './CardCategoria';

export default function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    listarCategorias().then((response) => {
      setCategorias(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold text-dark mb-6">Categorias Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}
