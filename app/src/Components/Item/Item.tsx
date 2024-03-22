import { FaArrowRight } from "react-icons/fa";
import { GetItem } from "../../Types/Item";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
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
        <Link to={`/post/${item.id}`}>
          <Button label="Découvrir" Icon={FaArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default Item;
