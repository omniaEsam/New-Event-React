import styled from "@emotion/styled";
import theme from "../../config";

export const OurprogramsWrapper = styled("div") `
label : OurprogramsWrapper ;
display: flex ;
align-items: center;
gap : 3rem ;

`;
export const ImageWrapper = styled("div") `
label : ImageWrapper ;
padding: 2rem 0 ;
`;
export const Image = styled("img") `
label : Image ;
border-radius: 50% ;
width:100% ;
`;
export const IconWrapper = styled("div") `
label : IconWrapper ;
display: flex ;
gap: 2rem ;
color: ${theme.gray};

`;
export const Title = styled("h2") `
label : Title ;
color: ${theme.gray};
margin:0.4rem 0;
`;
export const Name = styled("span") `
label : Name ;
color: ${theme.gray};
font-size: .9rem;
padding: .5rem 0;
display:block;
`;
export const description = styled("p") `
label : description ;
color: ${theme.gray};
line-height:1.9rem ;
`;
export const Roomnumber = styled("span") `
label : Roomnumber ;
padding-left:.4rem;
`;
