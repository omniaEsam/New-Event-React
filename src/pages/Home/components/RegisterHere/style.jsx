import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import Register from "../../../../shared/assests/imags/register-bg.jpg";

export const RegisterhereWrpper = styled("section")`
    label:RegisterhereWrpper;
    background: url(${Register}) fixed;
    height:400px;
    padding: 4rem 0 2rem 0;
    background-repeat: no-repeat;
    background-size:cover;
`
export const Registercontainer = styled("div")`
    label:Registercontainer;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
`
export const Title = styled("span")`
    label:Title;
   color:${theme.white};
   font-size: 2rem ;
   padding-right:.4rem;
`
export const ColoredTitle = styled("span")`
    label:ColoredTitle;
    color:${theme.primary};
    font-size: 2rem ;
`
export const Text = styled("p")`
    label:Text;
    color:${theme.white};
    font-size: 1.5rem ;
`
export const Texttwo = styled("p")`
    label:Texttwo;
    color:${theme.gray};
    
`
export const Formwrapper = styled("div")`
    label:Formwrapper;
    display:flex;
    flex-direction:column;
    gap: 1rem;
    
`
export const Registerinput = styled("input")`
    label:Registerinput;
    padding:.6rem;
    color:${theme.white};
    background-color:transparent;
    border-radius: 5px;
    border: 2px solid ${theme.white};
    ::placeholder{
        font-size: 1rem;
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
    border-radius:25px;
    transition: all .3s;
    :hover{
    color:${theme.secondary};
    background-color: ${theme.white};
    border: 1px solid ${theme.white };
    }
`