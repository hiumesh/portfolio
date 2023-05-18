import Link from "next/link";

export default function UserBlogList({ data }: any) {
  return (
    <div className="bg-[#FAFAFA] rounded-md">
      <h1 className="p-2 border-b m-0 text-2xl">
        Enjoy More
      </h1>
      <ul className="m-0 p-0">
        {data?.blogs?.map((blog: any) => (
          <li key={blog?.title}>
            <Link href={`/blogs/${blog._id}`} className="hover:bg-white px-3 py-4 border-b block group">
              <p className="p-0 mb-1 group-hover:text-blue-700">
                {blog?.title}
              </p>
              <div>
                {blog?.tags?.map((tag: any) => (
                  <span key={tag} className="text-sm mr-2 text-gray-600 hover:text-gray-700">#{tag}</span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};