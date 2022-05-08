import Axios from 'axios';

const axiosCaller = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

export default axiosCaller;
