"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/lib/api/blogs/api";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Folder } from "lucide-react";
import Link from "next/link";
import { BlogDetails } from "@/lib/types/user";


export default function Home() {

  const { data, isLoading, isError } = useQuery({
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

          {isLoading && <p className="text-center">Loading...</p>}
          {isError && <p className="text-center">Error fetching blogs</p>}
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-4 w-3/4 mx-auto">
            {data && data.map((blog: BlogDetails) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <Card className="shadow-sm hover:shadow-xl transition-shadow duration-300 !pt-0 !gap-4">
                  <CardContent className="!px-0 flex flex-col gap-4">
                    <img src={blog.banner ? blog.banner : "/banner.avif"} alt={blog.title} className="w-full h-48 object-cover rounded-t-xl" />
                    <div className="px-6">
                      <h2 className="text-xl font-bold line-clamp-2" title={blog.title}>{blog.title}</h2>
                      <p className="text-gray-600 line-clamp-2">{blog.content}</p>
                      {/* <a href={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">Read more</a> */}
                    </div>
                  </CardContent>
                  <CardFooter className="text-gray-500 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      
                      
                      { blog.categories ? <><Folder />
                      <p className="text-sm text-gray-500">{blog.categories[0]?.name}</p>
                      </> : null}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock />
                      <p className="text-sm text-gray-500">{new Date(blog.created_at).toLocaleDateString()}</p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
