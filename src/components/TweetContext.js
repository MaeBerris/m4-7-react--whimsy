import React from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";
export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("h:mm a - MMMM do, YYYY");
  return (
    <TweetContext.Provider
      value={{
        date,
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
