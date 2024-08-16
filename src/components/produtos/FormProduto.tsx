import { useState } from 'react';
import { Produto } from '../../models/Produto';

interface FormProdutoProps {
  produto?: Produto;
  onSubmit: (produto: Produto) => void;
}

export default function FormProduto({ produto = {
    id: '',
    nome: ''
}, onSubmit }: FormProdutoProps) {
  const [nome, setNome] = useState(produto.nome || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...produto, nome });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-4">
        <label htmlFor="nome" className="block text-sm font-medium text-dark">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded hover:bg-accent transition-colors duration-300"
      >
        {produto.id ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
}