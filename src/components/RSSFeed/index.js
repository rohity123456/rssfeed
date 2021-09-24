import React, { useEffect, useState } from "react";
import {
  fetchRSSFeed,
  getItemFromLocalStorage,
  setItemsInLocalStorage,
} from "../../utils";
import Categories from "../Categories";
import FeedList from "../FeedList";

function RSSFeed() {
  const [feedList, setFeedList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getFeeds = (feed) => {
    const bookMarkedIds = getItemFromLocalStorage("bookMarkedIds");
    return { ...feed, bookmarked: bookMarkedIds && bookMarkedIds[feed?.guid] };
  };

  useEffect(() => {
    fetchRSSFeed().then((data) => {
      setFeedList(data?.map(getFeeds) || []);
      setCategories(
        [
          ...new Set(
            data?.reduce((categories, feed) => {
              return [...categories, ...(feed.categories || [])];
            }, [])
          ),
        ].map((category) => category)
      );
    });
  }, []);

  const selectingCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((oldSelectedCategories) => {
        return oldSelectedCategories.filter(
          (oldCategory) => oldCategory !== category
        );
      });
    } else {
      setSelectedCategories((oldSelectedCategories) => {
        return [...oldSelectedCategories, category];
      });
    }
  };
  const handleFeedBookMark = (feedId) => {
    const feed = feedList.find((feed) => feed.guid === feedId);
    feed.bookmarked = !feed.bookmarked;
    let bookMarkedIds = getItemFromLocalStorage("bookMarkedIds");
    if (!bookMarkedIds) bookMarkedIds = {};

    if (feed.bookmarked)
      bookMarkedIds = {
        ...bookMarkedIds,
        [feedId]: feed.bookmarked,
      };
    else delete bookMarkedIds[feedId];
    setItemsInLocalStorage([
      {
        bookMarkedIds,
      },
    ]);

    setFeedList([...feedList]);
  };
  const bookMarkedIds = getItemFromLocalStorage("bookMarkedIds");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Back Channel</h1>
      <Categories
        selectedCategories={selectedCategories}
        selectingCategory={selectingCategory}
        categories={categories}
      />
      {bookMarkedIds && !!Object.keys(bookMarkedIds).length && (
        <div className="bookMarkedList">
          <h1>BookMarks</h1>
          <FeedList
            feedList={feedList.filter((feed) => bookMarkedIds[feed?.guid])}
            selectedCategories={selectedCategories}
            handleFeedBookMark={handleFeedBookMark}
          />
        </div>
      )}
      <div className="allFeeds">
        <h1>All Feeds</h1>
        <FeedList
          feedList={feedList}
          selectedCategories={selectedCategories}
          handleFeedBookMark={handleFeedBookMark}
        />
      </div>
    </div>
  );
}

export default RSSFeed;
