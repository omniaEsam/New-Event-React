import styled from "@emotion/styled";
import theme from "../../../../../design-system/config";

export const Wrapper = styled("section")`
    label :Wrapper;
    display: flex;
    align-items:center;
    justify-content:center;
    height:500px;
`
export const AccordionContant = styled("div")`
    label :Wrapper;
    width:70%;
`
export const Item = styled("div")`
    label :Item;
   margin-bottom:10px;
   box-shadow:0 3px  6px -4px #777 ;
`
export const Title = styled("div")`
    label :Title;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;
    background-color: ${theme.whiteSmoke};
    padding: 0 1rem;
    border-radius: 5px;
`
export const H2 = styled("h2")`
    label :H2;
    font-size: 1rem;
    color:${theme.black};
`
export const Contant = styled("div")`
    label :Contant;
    padding: 0 1rem;
    max-height: 0;
    overflow:hidden;
    transition: .6s all  cubic-bezier(0,1,0,1);
    &.show{
        height:auto;
        max-height:999px;
        transition: .6s all cubic-bezier(1,0,1,0);
    }
`
export const P = styled("p")`
    label :P;
    padding-bottom:.5rem;
   color:${theme.gray};
  
`