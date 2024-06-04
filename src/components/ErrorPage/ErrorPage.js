import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className='link' to='/'>
          Go back home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
