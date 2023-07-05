import fs from "fs";
import matter from "gray-matter";
import { PostsMetaData } from "./PostsMetaData";

const getPostsMataData = (): PostsMetaData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((filname) => {
    const fileContent = fs.readFileSync(`posts/${filname}`, "utf-8");
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subTitle: matterResult.data.subtitle,
      slug: filname.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostsMataData;
