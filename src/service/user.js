import axios from 'axios';
const url =
  'https://3z6cxh4habveolxvwuxmyy7mk40sfvzi.lambda-url.us-east-1.on.aws/usuarios';
  
async function login(user, senha) {
  try {
    // const { data, status } = await axios.post(
    //   url,
    //   { login: user, senha },
    //   { headers: { token: 'aGFrdW5hLW1hdGF0YQ==' } },
    // );
    // return status == 200 && data.response == 'OK'
    return true
  } catch (error) {
    console.error(error);
  }
}

export default { login };
