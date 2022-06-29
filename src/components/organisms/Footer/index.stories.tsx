import { ComponentStory } from "@storybook/react"
import Footer from "."


export default{
    title:"Organisms/Footer",
    component:Footer
}

let template : ComponentStory<typeof Footer> = () => <Footer/>

export const FooterComponent =  template.bind({})

FooterComponent.args={
    
}
