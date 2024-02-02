import AxiosInstance from "@helper/AxiosInstance";

const axiosService = AxiosInstance();

// top/anime?filter=airing
export const getTopAnime = function (filter: string, page: number) {
    try {
        return axiosService.get(`top/anime?filter=${filter}&limit=10&page=${page}`);
    } catch (error) {
        console.log(error);
    }
}

//top/anime?filter=favorite
export const getFavoriteAnime = function (filter: string, page?: number) {
    try {
        return axiosService.get(`top/anime?filter=${filter}&limit=10&page=${page}`);
    } catch (error) {
        console.log(error);
    }
}

// top/anime?type=tv // movie
export const getTypeAnime = function (type: string, page?: number) {
    try {
        return axiosService.get(`top/anime?type=${type}&limit=10&page=${page}`);
    } catch (error) {
        console.log(error);
    }
}

// top/anime?filter=bypopularity
export const getPopularAnime = function (filter: string, page?: number) {
    try {
        return axiosService.get(`top/anime?filter=${filter}&limit=10&page=${page}`);
    } catch (error) {
        console.log(error);
    }
}

export const newReleaseAnime = function (page?: number) {
    try {
        return axiosService.get(`seasons/now?limit=10&page=${page}`);
    } catch (error) {
        console.log(error);
    }
}

// top/anime?filter=airing&page=1&limit=10
export const getAiringAnime = function (filter: string, page: number, limit: number) {
    try {
        return axiosService.get(`top/anime?filter=${filter}&page=${page}&limit=${limit}`);
    } catch (error) {
        console.log(error);
    }
}
