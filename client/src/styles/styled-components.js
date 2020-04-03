import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 auto;
    height: auto;
  }

  img {
    border: solid 2px;
    border-bottom-color: #ffe;
    border-left-color: #eed;
    border-right-color: #eed;
    border-top-color: #ccb;
    max-height: 100%;
    max-width: 100%;
  }

  .frame {
    background-color: #ddc;
    border: solid 5vmin #eee;
    border-bottom-color: #fff;
    border-left-color: #eee;
    border-radius: 2px;
    border-right-color: #eee;
    border-top-color: #ddd;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
      0 5px 10px 5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    display: inline-block;
    margin: 10vh 10vw;
    /* height:80vh; */
    padding: 8vmin;
    position: relative;
    text-align: center;
    &:before {
      border-radius: 2px;
      bottom: -2vmin;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
      content: "";
      left: -2vmin;
      position: absolute;
      right: -2vmin;
      top: -2vmin;
    }
    &:after {
      border-radius: 2px;
      bottom: -2.5vmin;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
      content: "";
      left: -2.5vmin;
      position: absolute;
      right: -2.5vmin;
      top: -2.5vmin;
    }
  }
`;
