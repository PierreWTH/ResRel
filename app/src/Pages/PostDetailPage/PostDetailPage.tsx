import PostDetail from "../../Components/Common/PostDetail";
import { GetItem } from "../../Types/Item";
import { useEffect, useState } from "react";
import { getPost } from "../../Services/PostService";
import { useParams } from "react-router-dom";

type Props = {};

export default function PostDetailPage({}: Props) {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<GetItem | null>(null);

  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res?.data!);
    });
  }, [id]);
  return (
    <section>
      <PostDetail post={post} />
    </section>
  );
}
