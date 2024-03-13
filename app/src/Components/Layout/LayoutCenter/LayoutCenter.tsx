import "./LayoutCenter.css";

interface LayoutCenterProps {
  children: React.ReactNode;
}

export const LayoutCenter = ({ children }: LayoutCenterProps) => {
  return <section className="container">{children}</section>;
};
