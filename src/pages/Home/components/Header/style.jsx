import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import header from "../../../../shared/assests/imags/intro-bg.jpg";

export const Headerwrapper = styled("section")`
    label :Headerwrapper;
    background: url(${header}) fixed;
    height: 700px  ;
    padding:20% 0 ;
    text-align:center;
    background-repeat: no-repeat;
    background-size:cover;
`
export const H3 = styled("h3")`
    label :H3;
    font-size:1.6rem;
    color: ${theme.white};
`
export const Title = styled("h2")`
    label :Title;
    font-size:2.6rem;
    padding-top: 1rem ;
    color: ${theme.white};
`
export const Learnbtn = styled("button")`
    label :Learnbtn;
    font-style: 1rem ;
    margin-right: 2rem ;
    padding: 1rem 3rem ;
    cursor: pointer;
    color:${theme.secondary};
    background-color: ${theme.white};
    border: 1px solid ${theme.white};
    transition: all .3s;
    :hover{
    color:${theme.white};
    background-color: ${theme.primary};
    border: 1px solid ${theme.primary};
    }
`
export const Registerbtn = styled("button")`
    label :Registerbtn;
    font-style: 1rem ;
    padding: 1rem 3rem ;
    cursor: pointer;
    color:${theme.white};
    background-color: ${theme.primary};
    border: 1px solid ${theme.primary};
    transition: all .3s;
    :hover{
    color:${theme.secondary};
    background-color: ${theme.white};
    border: 1px solid ${theme.white };
    }
`