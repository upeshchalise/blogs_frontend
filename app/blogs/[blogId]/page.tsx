"use client";

import { blogById } from "@/lib/api/blogs/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const BlogDetails = () => {
    const id = useParams<{blogId: string}>().blogId;
    const {data, isLoading, isError} = useQuery({
        queryKey: ["blog", id],
        queryFn:()=> blogById(id),
    })
    {
        if (isLoading) {
            return <p>Loading...</p>
        }
        if (isError) {
            return <p>Error fetching blog</p>
        }
    }

    return (
        <>
        <div>{data?.title}</div>
        <p>{data?.content}</p>
        <p>{data?.claps}</p>
        <p>{data?.user.first_name} {data?.user?.last_name}</p>
        </>
        
    )
}

export default BlogDetails;