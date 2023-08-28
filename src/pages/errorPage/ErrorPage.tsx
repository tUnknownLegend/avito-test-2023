import {useRouteError} from 'react-router-dom';

function ErrorPage() {
    console.warn(useRouteError());

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>Please, try again later</p>
        </div>
    );
}

export default ErrorPage;
