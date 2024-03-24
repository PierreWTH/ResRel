import { FaArrowRight } from "react-icons/fa";
import { GetItem } from "@type/Item";
import Button from "@components/common/CommonButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  item: GetItem;
};

const CommonItem = ({ item }: Props) => {
  return (
    <Wrapper>
      <Item>
        <ItemTitle>{item.title}</ItemTitle>
        <p>{item.description}</p>
        <Link to={`/post/${item.id}`}>
          <Button label="Découvrir" Icon={FaArrowRight} />
        </Link>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const ItemTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #6b63fe;
`;

export default CommonItem;
