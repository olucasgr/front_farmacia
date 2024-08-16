import { Produto } from '../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-dark mb-2">{produto.nome}</h3>
    </div>
  );
}