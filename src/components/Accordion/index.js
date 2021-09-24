import React, { useState } from "react";
import Modal from "../Modal";
import "./index.css";
// guid;
const Accordion = ({ feed = {}, handleFeedBookMark }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const handleBkMarkClick = (e) => {
    handleFeedBookMark(feed?.guid);
  };

  return (
    <div className={feed?.bookmarked ? "accordion bookmarked" : "accordion"}>
      <div className={isExpanded ? "header expanded" : "header"}>
        {feed?.title}
        <div className="controls">
          <span onClick={(e) => handleBkMarkClick(e)}>
            {" "}
            <i
              className={`${
                feed?.bookmarked ? "fas" : "far"
              } fa-bookmark bookmark`}
            ></i>{" "}
          </span>
          <span onClick={() => setIsExpanded(!isExpanded)}>
            {" "}
            <i className="fas fa-chevron-down toggle"></i>{" "}
          </span>
        </div>
      </div>
      {isExpanded ? (
        <div className="item">
          {feed["content:encodedSnippet"]}
          <br />
          <button onClick={() => setReadMore(true)}>Read More </button>
        </div>
      ) : null}

      <Modal
        title={feed?.title}
        open={readMore}
        onClose={() => setReadMore(false)}
      >
        <div
          className="modal_children"
          dangerouslySetInnerHTML={{
            __html: feed?.["content:encoded"] || feed?.content,
          }}
        />
      </Modal>
    </div>
  );
};

export default Accordion;
