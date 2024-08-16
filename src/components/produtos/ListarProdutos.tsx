import { useEffect, useState } from 'react';
import { listarProdutos } from '../../services/ProdutoService';
import { Produto } from '../../models/Produto';
import CardProduto from './CardProduto';

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    listarProdutos().then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold text-dark mb-6">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}