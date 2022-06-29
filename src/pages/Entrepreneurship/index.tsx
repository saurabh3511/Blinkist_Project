import { Banner } from '../../components/molecules/Banner'
import { useState } from 'react'
import Categories from '../../components/organisms/BookCategories'
import Sizes from '../../components/organisms/SearchBarFunction/index'
import {Entrepreneurship} from '../../components/templates/EntrepreneurshipCategory/index'
import Library from '../../data/Library'



const EntrepreneurshipPage = () => {



const[ftitle, setTitle] = useState('')



    return (
        <>
        <Entrepreneurship
        banner={<Banner />}
        
         sizes={<Sizes setTitle = {setTitle}/>}
        trendingBlinks={
            
            <Categories data={Library} ftitle = {ftitle}
                        status="trending" />
        }
        justAddedBlinks={
            <Categories data={Library}
            status="justAdded" ftitle = {ftitle}/>
            
        }
        featuredBlinks={
            <Categories data={Library} ftitle = {ftitle}
            status="featured" />
            
        } />
        </>
    )
}

export default EntrepreneurshipPage