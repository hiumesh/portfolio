import Link from "next/link";

import BlogCard from "./blogCard";
import TagBlogList from "./tagBlogList";
import { domain } from "../config";

export interface Blog {
  _id: string;
  title: string;
  body: string;
  tags: string[];
  publish_date: string;
  views: number;
  featured_image: string;
  read_min: number;
}

export interface Tag {
  _id: string;
  tag_name: string;
  tag_color: string;
}

const tagBlogList: { tag: string; blogs: Blog[] }[] = [];

export async function getBlogs(
  tag?: string | string[],
  limit?: number | undefined,
  offset?: number | undefined
) {
  let baseUrl =  domain+"/api/blogs?";
  if (tag && typeof tag === "string") {
    baseUrl = baseUrl.concat(`tag=${tag}&`);
  }
  if (tag && typeof tag === "object" && tag.length) {
    const tmp = tag.map((t) => `tag=${t}`);
    baseUrl = baseUrl.concat(tmp.join("&"), "&");
  }
  if (limit) {
    baseUrl = baseUrl.concat(`limit=${limit}&`);
  }

  const res = await fetch(baseUrl, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    console.log("failed to fetch blog data");
    return [];
  }

  const responseData = await res.json();
  return responseData.data.blogs as Blog[];
}

async function getTags() {
  const res = await fetch(domain+"/api/tags", {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    console.log("failed to fetch tags data");
    return [];
  }

  const responseData = await res.json();
  return responseData.data.tags as Tag[];
}

export default async function Blogs({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const qtag = searchParams?.tag || undefined;
  const blogs = await getBlogs(qtag);
  const tags = await getTags();
  const reactBlogs = await getBlogs("react", 8);
  tagBlogList.push({ tag: "react", blogs: reactBlogs });

  return (
    <main className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      {qtag && <div className="bg-white p-3 rounded-lg mb-5">Showing results for <span className="text-blue-600">#{qtag}</span></div>}
      <div className="flex">
        <div className="w-[200px]">
          <div>
            <h2>My Tags</h2>
            <ul className="list-none">
              {tags.map((tag) => (
                <li key={tag._id}>
                  <Link
                    href={`/blogs?tag=${tag.tag_name}`}
                    className={`px-4 py-3 rounded-md ${tag.tag_name === qtag && "bg-slate-300 underline text-blue-700"} hover:bg-slate-300 block hover:underline hover:text-blue-800 cursor-pointer`}
                  >
                    #{tag.tag_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div>
            {blogs?.map((blog) => (
              <BlogCard key={blog._id} data={blog} />
            ))}
          </div>
        </div>
        <div className="hidden md:block  w-[300px]">
          {tagBlogList.map((data) => (
            <TagBlogList key={data.tag} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
}
