import axios, { AxiosResponse } from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false
  });

export type Blogpost = {
    id: number,
    title: string,
    content: string
}

export async function fetchBlogposts(): Promise<Blogpost[]> {
    const response: AxiosResponse<any,any> = await axiosInstance.get(`/api/posts`);
    return response.data;
}