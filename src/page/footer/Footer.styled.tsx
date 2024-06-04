import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const FooterWrapper = styled('footer')`
    background-color: #fff;
    color: #000000;
    font-weight:400;
    padding-top: 60px;
    padding-right: 20px; 
    padding-bottom: 50px;
    padding-left: 20px; 

    @media (min-width: 600px) {
        padding-right: 50px;
        padding-left: 50px;
    }

    @media (min-width: 960px) {
        padding-right: 100px;
        padding-left: 100px;
    }

    @media (min-width: 1280px) {
        padding-right: 150px;
        padding-left: 150px;
    }
`;

export const CustomTypography = styled(Typography)`
    color: #000000;
    font-size: 16px;
    margin-bottom: 9px;
    font-weight: 400;
    line-height: 29px;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 18px;

    }
`;
export const DivWrapper = styled('div')`
    //   &:hover{
    //     cursor:pointer;
    //   }
`;

