import axios, { AxiosResponse } from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false
  });


axiosInstance.interceptors.request.use(
(config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
},
(error) => {
    Promise.reject(error);
}
);

export type Blogpost = {
    id: number,
    title: string,
    content: string,
    date: number,
    imageUrl: string,
    likes: number
}

export async function fetchBlogposts(): Promise<Blogpost[]> {
    const response: AxiosResponse<any,any> = await axiosInstance.get(`/api/posts`);
    console.log(response.data);
    return response.data;
}

export async function addLike(postId: number) {
    return await axiosInstance
      .patch(`http://localhost:8080/api/posts/${postId}/like`)
      .then((response) => {
        return response.status;
      })
}

export async function addPost(title: string, content: string, imageUrl: string) {
  const newPost = {
      title: title,
      content: content,
      imageUrl: imageUrl
    }
  return await axiosInstance
    .post("http://localhost:8080/api/posts", newPost)
    .then((response) => {
      return response.status;
    })
}

export async function login(email: string, password: string): Promise<AxiosResponse> {
    const loginDetails = {
      email: email,
      password: password,
    };
    console.log(loginDetails);
    return await axiosInstance
      .post("http://localhost:8080/api/auth/authenticate", loginDetails)
      .then((response) => {
        return response;
      });
  }