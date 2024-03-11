import { GetItem } from "../../Types/Item";
import Item from "../Item/Item";

interface ItemListProps {
  items: GetItem[];
}

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <>
      {items
        ? items.map((item) => {
            return <Item item={item} key={item.id} />;
          })
        : ""}
    </>
  );
};
