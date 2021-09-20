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



function FeedList({feedList = []}) {
    return (
        <div className = 'feedList'>
            {feedList.map(feed => <Feed feed = {feed} key = {feed?.guid}/>)}
        </div>
    )
}

export default FeedList
