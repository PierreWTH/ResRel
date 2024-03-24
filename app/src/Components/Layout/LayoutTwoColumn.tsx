import styled from "styled-components";

interface LayoutTwoColumnProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
}

export const LayoutTwoColumn = ({
  children1,
  children2,
}: LayoutTwoColumnProps) => {
  return (
    <Container>
      <Column>{children1}</Column>
      <Column>{children2}</Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
