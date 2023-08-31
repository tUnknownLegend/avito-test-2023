import {apiPaths} from '../../public/apiConsts.ts';
import {defer} from 'react-router-dom';

/**
 * Class for handling network requests.
 */
class NetRequest {
    #headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        // 'X-RapidAPI-Key': 'c1e55ff5ebmsh93686e0a76d9b42p120301jsn0b2f32d88e2d',
        'X-RapidAPI-Key': 'cf47e79214mshd8c84ddf6ce65cfp143935jsnfd442403565e',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    };

    /**
     * Method implementing http-request.
     * @param url - path to which send request
     * @param options - request params
     * @returns - request promise
     */
    #makeRequest = async (url: string, options: object) => {
        const results= fetch(url, options).then((response) => response.ok ?
            response.json().then((data) => [response.status, data]) :
            [response.status, response.body]).catch((error) => [500, error]);
        return defer({results});
    };


    /**
     * Метод, реализующий запрос GET.
     * @param url - path to which send request
     * @returns - request promise
     */
    makeGetRequest = async (url: string) => {
        const options = {
            method: 'get',
            mode: 'cors',
            credentials: 'include',
            headers: this.#headers,
        };
        return this.#makeRequest(`${apiPaths.base}/${url}`, options);
    };
}

export default new NetRequest();
