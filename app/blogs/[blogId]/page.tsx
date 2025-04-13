"use client";

import { blogById } from "@/lib/api/blogs/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

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
        <section id="blog-details" className="w-full py-5">
            <div className="w-full md:w-3/4 mx-auto flex flex-col gap-5">
            <Image src={data?.banner ? data?.banner : "/banner.avif"} width={800} height={400} alt={data?.title ? data?.title : 'banner image of blog'} />
                <div className="px-5 flex flex-col gap-5">

                <div className="flex items-center gap-4">
                    <Image src={data?.user?.image ? data?.user?.image : "/profile.webp"} width={40} height={40} alt={data?.title ? data?.title : 'banner image of blog'} />
                    <div>
                        <h2 className="font-semibold text-lg">{data?.user?.first_name} {data?.user?.last_name}</h2>
                        <p className="text-sm">Posted on {dayjs(data?.created_at).format('MMMM D, YYYY')}</p>
                    </div>
                </div>
                <div>
                <h1 className="font-bold text-4xl">{data?.title}</ h1>
                <p>{data?.content}</p>
                </div>
                </div>
            </div>
        </section>

        </>
        
    )
}

export default BlogDetails;