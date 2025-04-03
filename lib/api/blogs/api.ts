import axiosInstance from "@/lib/axios";

export const getBlogs = async () => {
    const {data} = await axiosInstance.get("/blogs");
    return data;
}