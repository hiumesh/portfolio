import Image from "next/image";

import MarkdownPreview from "./markdownPreview";
import UserBlogList from "./userblogList";
import { Blog, getBlogs } from "../page";

async function getBlogData(blogId: string) {
  const res = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
    next: { revalidate: 60000 },
  });
  if (!res.ok) {
    console.log("Failed to get blog");
    return null;
  }
  const jsonResponse = await res.json();
  return jsonResponse.data as Blog;
}

async function parseMarkdown(text: string) {
  const res = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mode: "markdown",
      text: text,
    }),
  });

  if (!res.ok) {
    console.log("Failed to parse markdown");
    console.log(await res.json());
    return "<h1 className='text-5xl text-center'>Something went wrong!</h1>";
  }
  const htmlText = await res.text();
  return htmlText;
}

export default async function BlogPage({
  params,
}: {
  params: { blogId: string };
}) {
  const blog = await getBlogData(params.blogId);
  let bodyHtml = await parseMarkdown(blog?.body as string);
  let moreBlogs = blog?.tags.length ? await getBlogs(blog.tags, 8) : [];

  return (
    <div className="max-w-6xl mx-auto flex items-stretch pt-20 p-2 overflow-auto relative min-h-screen">
      <div className="hidden lg:block mr-3 sticky top-0">
        <div className="flex flex-col items-center mb-3">
          <button className="flex items-center text-slate-500 text-sm hover:bg-red-100 group rounded-full p-2 mb-1">
            <svg
              className="fill-gray-700 group-hover:fill-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
            </svg>
          </button>
          <span className="text-gray-600">{blog?.views}</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-md">
          <div className="bg-indigo-300 rounded-md overflow-hidden relative h-[400px]">
            <Image
              style={{ objectFit: 'cover' }}
              alt={blog?.featured_image as string}
              src={blog?.featured_image as string}
              fill
            />
          </div>
          <div className="px-10 pt-8 mb-20">
            <div className="flex justify-between items-center">
              <p className="m-0 text-sm text-gray-400">
                Posted on {blog?.publish_date}
              </p>
              <p className="lg:hidden m-0 text-lg text-gray-800">
                {blog?.views} Views
              </p>
            </div>
            <h1 className="text-7xl pt-4 pb-2 block font-bold">
              {blog?.title}
            </h1>
            <ul className="flex mb-4">
              {blog?.tags.map(tag => (<li key={tag} className="m-1 px-2 py-0.5 rounded-md first:ml-0 first:pl-0 last:mr-0 text-gray-700 text-lg hover:bg-slate-100">#{tag}</li>)) }
            </ul>

            <MarkdownPreview markdownHtml={bodyHtml} />
          </div>
          <hr className="mb-5"></hr>
        </div>
      </div>
      <div className="hidden lg:block w-[400px] sticky top-0">
        <div className="mx-3">
          <UserBlogList data={{ blogs: moreBlogs }} />
        </div>
      </div>
    </div>
  );
}
