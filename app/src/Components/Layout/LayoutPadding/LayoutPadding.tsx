import "./LayoutPadding.css";

interface LayoutPaddingProps {
  children: React.ReactNode;
}

export const LayoutPadding = ({ children }: LayoutPaddingProps) => {
  return <section className="container">{children}</section>;
};
