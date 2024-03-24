import PostDetail from "@components/Common/PostDetail";
import { GetItem } from "@type/Item";
import { useEffect, useState } from "react";
import { getPost } from "@services/PostService";
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
