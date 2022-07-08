import { styled } from "@mui/styles";
// import { Banner } from "../../molecules/Banner";
import  Footer from "../../organisms/Footer/index";
import { HeaderComponent } from "../../organisms/Header/index";
// import Sizes from "../../organisms/SearchBarFunction";


export interface EntrepreneurshipProps {
    
    banner:React.ReactNode;
    sizes: React.ReactNode;
    trendingBlinks: React.ReactNode;
    justAddedBlinks: React.ReactNode;
    featuredBlinks: React.ReactNode;
    
}

let BodyContainer = styled("div")({
    width: 912,
    position: 'relative',
    left: 480,
    minHeight: '50px',

})


let SearchContainer = styled("div") ({
    position: 'relative',
    top: 58,
    left: 25,
    
})

let TrendingBlinks = styled("div") ({
    position: 'relative',
    top: 184,
    left: 25
})

let JustAddedBlinks = styled("div") ({
    position: 'relative',
    top: 280,
    left: 25
})

let FeaturedBlinks = styled("div") ({
    position: 'relative',
    top: 376,
    left: 25
})

let FooterWrap = styled("div") ({
    position: 'relative',
    height:500,
    top: 500,
    bottom:0,
    minHeight: '50px'    
    
})
let Wrap = styled("div") ({
    minHeight: '100%', 
})
let HeadWrap = styled("div") ({
    minHeight: '50px',
})
export const Entrepreneurship = (props: EntrepreneurshipProps) => {
    let { trendingBlinks, banner,sizes,justAddedBlinks, featuredBlinks} = props
    return (
        <>
        <Wrap>
            <HeadWrap>
                <HeaderComponent/>
            </HeadWrap>
            <BodyContainer>
                {banner}
                <SearchContainer> {sizes} </SearchContainer>

                <TrendingBlinks> {trendingBlinks} </TrendingBlinks>

                <JustAddedBlinks> {justAddedBlinks}  </JustAddedBlinks>
                
                <FeaturedBlinks> {featuredBlinks} </FeaturedBlinks>
            </BodyContainer>
            <FooterWrap>
            <Footer/>
            </FooterWrap>
        </Wrap>
        </>
    )
}