import styled, {createGlobalStyle} from 'styled-components';
import backgroundImage from "./images/rubikscube.jpg";

export const Styles = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image: url(${backgroundImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
*{
    box-sizing: border-box;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

>p{
    color: #fff;
}
h1{
    font-size: 2.2rem;
}
.score{
    color: #fff;
    font-size: 2rem;
    margin: 0;
}
.start, .next{
    cursor: pointer;
    background: linear-gradient(180deg, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px
}
`
