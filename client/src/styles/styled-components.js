import styled from "styled-components";
import {  Form} from "antd";

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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3rem;
  width: 50vw;
  font-size: 3rem;
  padding: 2.5rem;
  margin: 2.5rem;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  /* border-radius: 6px; */
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 92vw;
    padding: 1rem;
    /* width: 100vw; */
  }
button{
  margin-top:10px;
}
  form.Item {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 0.5rem;
      margin: 0 auto;
      width: 90%;
    }
  }
  input {
    font-size: 1.5rem;
    width: 62%;
    height: 50px;
    @media (max-width: 768px) {
      font-size: 1rem;
      margin: 0 auto;
      width: 84%;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

export const Upload = styled.div`
position: relative;
text-align: center;

.file-upload-container{
  position: absolute;

  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);

}
`