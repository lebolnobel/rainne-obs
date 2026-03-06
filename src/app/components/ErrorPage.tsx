import * as React from 'react';
import {
  useRouteError,
  isRouteErrorResponse,
  NavLink,
  useNavigate,
} from 'react-router-dom';

const ErrorPage = (): React.ReactNode => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    // Clear in case of issue with stored data
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    // Clear in case of issue with stored data
    errorMessage = error;
  } else {
    // Clear in case of issue with stored data
    console.error(error);
    errorMessage = 'Ahem...';
  }

  const reset = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold">Oups!</h1>
          <p className="mb-4 text-2xl font-semibold text-gray-900">
            Une erreur est survenue
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            {errorMessage}
          </p>

          <div className="flex gap-4 justify-center">
            <NavLink
              to="/"
              title="Retour à l'accueil"
              className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/30"
            >
              Retour
            </NavLink>
            <button
              onClick={reset}
              className="px-6 py-2 font-semibold rounded-md bg-red-700 text-white hover:bg-red-600 hover:shadow focus:outline-none focus:ring-2 focus:ring-red-400/40"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
