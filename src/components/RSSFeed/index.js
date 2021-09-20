import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchRSSFeed } from '../../utils'
import Categories from '../Categories'
import FeedList from '../FeedList'

function RSSFeed() {
    const [feedList, setFeedList] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories]= useState([])
    useEffect( () => {
        fetchRSSFeed().then(data => {
        
            setFeedList(data || [])
            setCategories([...new Set(data?.reduce((categories, feed) => {
                return [...categories, ...(feed.categories || [])]  
                 },[]))]
                .map(category => category)
          )
        })
    }, [])

    const selectingCategory = (category) =>{
        if(selectedCategories.includes(category)){
            setSelectedCategories((oldSelectedCategories)=>{
                return oldSelectedCategories.filter((oldCategory)=>oldCategory!==category)
            })
        }else{
            setSelectedCategories((oldSelectedCategories)=>{
                return [...oldSelectedCategories, category]
            })
        }
    }

    console.log(feedList)
    return (
        <div>
            <h1 style={{textAlign:"center"}} >Back Channel</h1>
            <Categories selectedCategories={selectedCategories} selectingCategory={selectingCategory} categories = {categories}/>
            <FeedList feedList = {feedList} selectedCategories={selectedCategories}/>
        </div>
    )
}

export default RSSFeed
