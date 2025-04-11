import axiosInstance from "@/lib/axios";
import { BlogDetails, loginUser, UserLogin, UserSignup } from "@/lib/types/user";

export const getBlogs = async () => {
    const {data} = await axiosInstance.get("/blogs");
    return data;
}

export const signup = async (data : UserSignup) => {
    const response = await axiosInstance.post("/user", data);
    return response.status;
}

export const login = async (data: UserLogin): Promise<loginUser> => {
    const response = await axiosInstance.post("/login", data);
    return response.data
}

export const blogById = async (blogId: string):Promise<BlogDetails> => {
    const {data} = await axiosInstance.get(`/blog/${blogId}`);
    return data
}