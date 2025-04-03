"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/lib/api/blogs/api";

export default function Home() {

  const {data, isLoading, isError} = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })
  
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col p-4 w-3/4 mx-auto text-center">

          <strong className="text-3xl font-bold underline">
            Blogzz
          </strong>
          <p>Discover insights, stories, and trends in technology, design, and more.</p>
        </div>
        <div>
        <Input placeholder="Search blogzz" className="w-1/2 mx-auto"/>

        {isLoading && <p className="text-center">Loading...</p>}
        {isError && <p className="text-center">Error fetching blogs</p>}
        {data && data.map((blog: any) => (
          <div key={blog.id} className="p-4 w-3/4 mx-auto border-b">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
        </div>
      </section>
    </>
  );
}
