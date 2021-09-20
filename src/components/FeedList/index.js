import React from 'react'
import Accordion from '../Accordion'
import './index.css'

function Feed({feed}) {
    return (
        <div className = "feed">
            <Accordion feed = {feed} />
        </div>
    )
}



function FeedList({feedList = [], selectedCategories=[]}) {
    return (
        <div className = 'feedList'>
            {feedList.map(feed => {
            if(selectedCategories.length===0) {
                return(<Feed feed = {feed} key = {feed?.guid}/>)
            } else{
                const isCategoryFound = selectedCategories.some(category=> (feed?.categories||[]).includes(category))
                if(isCategoryFound){
                    return(<Feed feed = {feed} key = {feed?.guid}/>)
                }
            }
            return null
            })}
        </div>
    )
}

export default FeedList
