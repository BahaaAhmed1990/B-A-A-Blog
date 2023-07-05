import Link from "next/link";
import { PostsMetaData } from "./PostsMetaData";

const PostPreview = (props: PostsMetaData) => {
  return (
    <div className="border border-slate-700 rounded-md py-6 px-2 bg-white">
      <Link
        href={`/posts/${props.slug}`}
        className="font-bold text-red hover:underline"
      >
        <h2 className="text-purple-700 font-bold hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="text-xs ">{props.date}</p>
      <p className="text-slate-400 mt-2">{props.subTitle}</p>
    </div>
  );
};

export default PostPreview;
