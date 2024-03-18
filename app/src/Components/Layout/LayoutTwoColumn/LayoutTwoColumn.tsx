import "./LayoutTwoColumn.css";

interface LayoutTwoColumnProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
}

export const LayoutTwoColumn = ({
  children1,
  children2,
}: LayoutTwoColumnProps) => {
  return (
    <section className="column-container">
      <div className="column">{children1}</div>
      <div className="column">{children2}</div>
    </section>
  );
};
