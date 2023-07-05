import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostsMataData from "../../../../components/getPostMeatData";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostsMataData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const page = (prpos: any) => {
  const slug = prpos.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1 className="text-1xl font-bold text-violet-700">{post.data.title}</h1>
      <article className="prose prose-slate">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default page;
