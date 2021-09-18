import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchRSSFeed } from '../../utils'

function RSSFeed() {
    const [feedList, setFeedList] = useState([])
    useEffect( () => {
        fetchRSSFeed().then(data => setFeedList(data || []))
    }, [])
    console.log(feedList)
    return (
        <div>
            
        </div>
    )
}

export default RSSFeed
