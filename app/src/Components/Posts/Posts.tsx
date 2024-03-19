import React, { useEffect, useState } from "react";
import { getPosts } from "../../Services/PostService";
import { ItemList } from "../ItemList/ItemList";
import { GetItem } from "../../Types/Item";
import { useAuth } from "../../Context/useAuth";
import "./Posts.css";

type PostsProps = {
  limit?: number;
};

const Posts: React.FC<PostsProps> = ({ limit }) => {
  const [posts, setPosts] = useState<GetItem[] | null>(null);
  // to be sure that user is authenticated before fetching data
  const { isReady } = useAuth();

  useEffect(() => {
    if (isReady) {
      getItems();
    }
  }, [isReady]);

  const getItems = () => {
    getPosts(limit).then((res) => {
      setPosts(res?.data!);
    });
  };
  return (
    <div className="posts-wrapper">
      <ItemList items={posts!} limit={limit} />
    </div>
  );
};

export default Posts;
