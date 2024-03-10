import "./ItemList.css";

interface ItemListProps {
  items?: Array<Item> | null;
}

interface Item {
  title: string;
  body: string;
}

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <div className="item-wrapper">
      {items?.map((item, index) => (
        <div key={index} className="item">
          <h2 className="title">{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
