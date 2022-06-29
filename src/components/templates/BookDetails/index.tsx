import  Footer  from "../../organisms/Footer/index";
import {HeaderComponent} from "../../organisms/Header/index"
import { styled } from "@mui/styles";
import { BookDescription } from "../../organisms/BookDescription";

export interface BookDetailsProps {
  header: React.ReactNode;
  footer?: React.ReactNode;
  body?: React.ReactNode;
}

let BodyComponent = styled("div")({
  position: "relative",
  left: 510,
});

// let FooterComponent = styled("div")({
//     position: 'relative',
//     top: 177
// })

export const BookDetails = (props: BookDetailsProps) => {
  let {  body } = props;
  return (
    <>
    <HeaderComponent/>
    
    <BodyComponent><BookDescription />,</BodyComponent>
    
    <Footer/>
  </>
  );
};