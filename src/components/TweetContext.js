import React from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";
export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("h:mm a - MMMM do, YYYY");
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);
  return (
    <TweetContext.Provider
      value={{
        numOfLikes,
        numOfRetweets,
        date,
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
