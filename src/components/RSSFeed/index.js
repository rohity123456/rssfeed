import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchRSSFeed } from '../../utils'
import Categories from '../Categories'
import FeedList from '../FeedList'

function RSSFeed() {
    const [feedList, setFeedList] = useState([])
    const [categories, setCategories] = useState([])
    useEffect( () => {
        fetchRSSFeed().then(data => {
        
            setFeedList(data || [])
            setCategories([... new Set(data?.reduce((categories, feed) => {
                return [...categories, ...(feed.categories || [])]  
                 },[]))]
                .map(category => ({name : category, selected : false }))
          )
        })
    }, [])
    console.log(feedList)
    return (
        <div>
            <h1 style={{textAlign:"center"}} >Back Channel</h1>
            <Categories categories = {categories}/>
            <FeedList feedList = {feedList}/>
        </div>
    )
}

export default RSSFeed
