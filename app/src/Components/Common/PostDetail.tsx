import { GetItem } from "../../Types/Item";
import styled from "styled-components";

type Props = {
  post: GetItem | null;
};

const PostDetail = ({ post }: Props) => {
  return (
    <Wrapper>
      <PostWrapper>
        <h2 className="title">{post?.title}</h2>
        <p>{post?.content}</p>
      </PostWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #6b63fe;
  margin: 1rem;
  height: 100%;
  border-radius: 5px;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

export default PostDetail;
