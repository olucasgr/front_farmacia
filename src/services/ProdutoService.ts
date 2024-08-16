import axios from 'axios';
import { Produto } from '../models/Produto';

const API_URL = 'https://farmacia-n0cw.onrender.com';

export const listarProdutos = async () => {
  return axios.get<Produto[]>(`${API_URL}/produtos`);
};

export const cadastrarProduto = async (produto: Produto) => {
  return axios.post(`${API_URL}/produtos`, produto);
};

export const atualizarProduto = async (id: string, produto: Produto) => {
  return axios.put(`${API_URL}/produtos/${id}`, produto);
};

export const deletarProduto = async (id: string) => {
  return axios.delete(`${API_URL}/produtos/${id}`);
};
