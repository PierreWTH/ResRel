import React, { useEffect, useState } from "react";
import { getPosts } from "@services/PostService";
import { ItemList } from "@components/Composite/ItemList";
import { GetItem } from "@type/Item";
import { useAuth } from "@context/useAuth";
import styled from "styled-components";

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
    <Wrapper>
      <ItemList items={posts!} limit={limit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export default Posts;
