import axios from 'axios'; 
/**
 * https://rickandmortyapi.com/documentation
 * https://rickandmortyapi.com/api/character
 */

const url = "https://rickandmortyapi.com/api"


const apiRickMorty = (path) => `${url}${path}`


export class RickMorty{
    static getCharacters(){
        return axios (apiRickMorty('/character'))
    }

    static getSearch(id){
        return axios (apiRickMorty(`/${id}/`))
    }
}

