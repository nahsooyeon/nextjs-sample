import { NextPageContext } from 'next';

const Custom404 = () => {
  return <h1>404 - Page Not Found</h1>;
};

export const getInitialProps = async (context: NextPageContext) => {
  return { props: {} };
};

export default Custom404;
