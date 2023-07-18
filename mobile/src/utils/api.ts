import axios from 'axios';


// O ip que deve ser adicionado aqui e no códio de mobile é o do expo caso esteja rodando em ambiente de desenvolvimento
export const api = axios.create({
  baseURL: 'http://192.168.100.32:3001'
});
