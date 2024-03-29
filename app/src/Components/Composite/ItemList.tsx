import { GetItem } from "@type/Item";
import Item from "@components/Common/CommonItem";

interface ItemListProps {
  items: GetItem[];
  limit?: number;
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
