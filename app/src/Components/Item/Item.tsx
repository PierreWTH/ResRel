import { FaArrowRight } from "react-icons/fa";
import { GetItem } from "../../Types/Item";
import Button from "../Button/Button";
import "./Item.css";

type Props = {
  item: GetItem;
};

const Item = ({ item }: Props) => {
  return (
    <div className="item-wrapper">
      <div className="item">
        <h2 className="title">{item.title}</h2>
        <p>{item.content}</p>
        <Button label="Découvrir" Icon={FaArrowRight} />
      </div>
    </div>
  );
};

export default Item;
