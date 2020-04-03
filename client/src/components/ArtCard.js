import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Card, Button } from "antd";
import styled from "styled-components";

const { Meta } = Card;
export default function ArtCard(props) {
  const { deleteArt, getArtById } = useContext(Context);

  const { id, title, source_image, description } = props.artPiece;
  return (
    <StyledCard>
      <Card
        // style={{ width: 602 }}
        cover={<img alt="example" src={source_image} />}
        actions={[]}
      >
        <Meta title={title} description={description} />
        <br />
        <Button onClick={e => getArtById (e, id)}>View details</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={e => deleteArt(e, id)}>
          Delete
        </Button>
      </Card>
      <br />
      <br />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
