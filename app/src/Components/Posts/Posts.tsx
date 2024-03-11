import React, { useEffect, useState } from "react";
import { getPosts } from "../../Services/PostService";
import { toast } from "react-toastify";
import { ItemList } from "../ItemList/ItemList";
import { GetItem } from "../../Types/Item";

const Posts = () => {
  const [posts, setPosts] = useState<GetItem[] | null>(null);

  useEffect(() => {
    getItems();
  }, []);

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
