import React from "react";
import Accordion from "../Accordion";
import "./index.css";

function Feed({ feed, handleFeedBookMark }) {
  return (
    <div className="feed">
      <Accordion feed={feed} handleFeedBookMark={handleFeedBookMark} />
    </div>
  );
}

function FeedList({
  feedList = [],
  selectedCategories = [],
  handleFeedBookMark,
}) {
  return (
    <div className="feedList">
      {feedList.map((feed) => {
        if (selectedCategories.length === 0) {
          return (
            <Feed
              feed={feed}
              key={feed?.guid}
              handleFeedBookMark={handleFeedBookMark}
            />
          );
        } else {
          const isCategoryFound = selectedCategories.some((category) =>
            (feed?.categories || []).includes(category)
          );
          if (isCategoryFound) {
            return (
              <Feed
                feed={feed}
                key={feed?.guid}
                handleFeedBookMark={handleFeedBookMark}
              />
            );
          }
        }
        return null;
      })}
    </div>
  );
}

export default FeedList;
