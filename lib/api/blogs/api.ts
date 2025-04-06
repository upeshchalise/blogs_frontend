import axiosInstance from "@/lib/axios";

export const getBlogs = async () => {
    const {data} = await axiosInstance.get("/blogs");
    return data;
}

export const signup = async (data : any) => {
    console.log("data", data);
    const response = await axiosInstance.post("/user", data);
    return response.status;
}