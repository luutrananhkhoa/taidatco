import Axios, { AxiosInstance } from "axios";

const createApiClient = (baseURL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'): AxiosInstance => {
    return Axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 10000
    });
}

export const getProducts = async (params: any = {}): Promise<any> =>{
    try {
        const defaultParams = {
            page: 1,
            limit: 20,
            sort: 'created_at',
            order: 'asc'
        };
        const mergedParams = { ...defaultParams, ...params };

        const api = createApiClient();

        const response = await api.get<any>('/products', { params: mergedParams });

        return response.data;
    } catch (error) {
        console.error(error);
        return null
    }

}