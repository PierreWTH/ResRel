import React, { useEffect, useState } from "react";
import { getPosts } from "../../Services/PostService";
import { ItemList } from "../ItemList/ItemList";
import { GetItem } from "../../Types/Item";
import { useAuth } from "../../Context/useAuth";
const Posts = () => {
  const [posts, setPosts] = useState<GetItem[] | null>(null);
  // to be sure that user is authenticated before fetching data
  const { isReady } = useAuth();

  useEffect(() => {
    if (isReady) {
      getItems();
    }
  }, [isReady]);

  const getItems = () => {
    getPosts().then((res) => {
      setPosts(res?.data!);
    });
  };
  return (
    <div className="flex flex-col">
      <ItemList items={posts!} />
    </div>
  );
};

export default Posts;
