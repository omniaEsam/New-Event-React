import styled from "@emotion/styled";
import theme from '../../../../design-system/config';

export const NavbarWrapper = styled("section")`
    label : NavbarWrapper;
    color: ${theme.white} ;
    position: fixed;
    width:100%;
    background-color: ${theme.black};
    padding: 1.5rem 0;

`;
export const Navcontainer = styled("div")`
    label : Navcontainer;
    display: flex;
    justify-content:space-between ;
    align-items: center;

`;
export const Navtitle = styled("span")`
    label : Navtitle;
    font-size: 1.7rem ;
`;
export const Event = styled("span")`
    label : Event;
    color:${theme.primary} ;
`;
export const Link = styled("a")`
    label : Link;
    color:${theme.white} ;
    font-size: 1rem ;
    text-decoration:none ;
`;
export const Linkwrapper = styled("div")`
    label : Linkwrapper;
    display: flex ;
    gap: 2rem ;
`;
