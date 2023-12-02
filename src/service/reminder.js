import axios from 'axios';
const url =
  'https://3z6cxh4habveolxvwuxmyy7mk40sfvzi.lambda-url.us-east-1.on.aws/lembrete';

//   {
//     "data": "oji",
//     "descricao": "uai so",
//     "titulo": "lavar"
// }

async function listar() {
  try {
    const res = await axios.get(url,
      { headers: { token: 'aGFrdW5hLW1hdGF0YQ==' } },
    );
    console.log(res)
    return res.data
  } catch (error) {
    console.error(error);
  }
}

async function salvar(dados) {
  try {
    const res = await axios.post(url,dados,
      { headers: { token: 'aGFrdW5hLW1hdGF0YQ==' } },
    );
    console.log(res)
    return res.data
  } catch (error) {
    console.error(error);
  }
}

async function atualizar(dados) {
  try {
    const res = await axios.put(`${url}`,dados,
      { headers: { token: 'aGFrdW5hLW1hdGF0YQ==' } },
    );
    console.log(res)
    return res.data
  } catch (error) {
    console.error(error);
  }
}

async function deletar(lembrete) {
  try {
    const res = await axios.delete(`${url}?lembrete=${lembrete}`,
      { headers: { token: 'aGFrdW5hLW1hdGF0YQ==' } },
    );
    console.log(res)
    return res.data
  } catch (error) {
    console.error(error);
  }
}

export default { listar, salvar, atualizar, deletar };
