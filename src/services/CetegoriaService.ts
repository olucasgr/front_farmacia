import axios from 'axios';
import { Categoria } from '../models/Categoria';

const API_URL = 'https://farmacia-n0cw.onrender.com';

export const listarCategorias = async () => {
  return axios.get<Categoria[]>(`${API_URL}/categorias`);
};

export const cadastrarCategoria = async (categoria: Categoria) => {
  return axios.post(`${API_URL}/categorias`, categoria);
};

export const atualizarCategoria = async (id: string, categoria: Categoria) => {
  return axios.put(`${API_URL}/categorias/${id}`, categoria);
};

export const deletarCategoria = async (id: string) => {
  return axios.delete(`${API_URL}/categorias/${id}`);
};
