import axios from "axios";

// const rndNmbr = Math.round(Math.random() * 50);

export const AxiosGet = () => {
  const response = axios
    .get(`https://api.chucknorris.io/jokes/random`)
    .then((res) => {
      return res;
    });

  return response;
};

export const AxiosAsyncGet = async () => {
  try {
    const response = await axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then((res) => {
        return res.data;
      });

    return response;
  } catch (error) {
    return error.message;
  }
};
