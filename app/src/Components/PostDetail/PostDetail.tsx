import { GetItem } from "../../Types/Item";

type Props = {
  post: GetItem | null;
};

const PostDetail = ({ post }: Props) => {
  return (
    <div className="item-wrapper">
      <div className="item">
        <h2 className="title">{post?.title}</h2>
        <p>{post?.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
