import {useRouteError} from 'react-router-dom';
import './ErrorPage.scss';

/**
* View to render error page
* */
function ErrorPage() {
    console.warn(useRouteError());

    return (
        <div className={'error-page'}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>Please, try again later</p>
        </div>
    );
}

export default ErrorPage;
