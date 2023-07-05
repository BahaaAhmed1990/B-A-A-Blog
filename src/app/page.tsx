import Link from "next/link";
import getPostsMataData from "../../components/getPostMeatData";
import PostPreview from "../../components/PostPreview";

export default function Home() {
  const postsMetaData = getPostsMataData();

  const postsPreview = postsMetaData.map((post) => (
    <PostPreview key={post.slug} {...post}></PostPreview>
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postsPreview}</div>
  );
}
