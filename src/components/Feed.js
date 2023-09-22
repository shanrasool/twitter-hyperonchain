import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "./Post";

const style = {
  wrapper: `flex-[3] m-4 border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Shan",
    userName: "0xB5228D9C95be809D4e6766C0e85c21cFD7321369",
    avatar: "",
    text: "Hey there",
    isProfileImageNft: true,
    timeStamp: "2021-09-01T12:00:00.000Z",
  },
  {
    displayName: "Stoic",
    userName: "0xB5228D9C95be809D4e6766C0e85c21cFD7321369",
    avatar: "",
    text: "Hola Amigos",
    isProfileImageNft: false,
    timeStamp: "2021-09-01T12:00:00.000Z",
  },
  {
    displayName: "Ali",
    userName: "0xB5228D9C95be809D4e6766C0e85c21cFD7321369",
    avatar: "",
    text: "Hey Guys Its Shan",
    isProfileImageNft: false,
    timeStamp: "2021-09-01T12:00:00.000Z",
  },
  {
    displayName: "Bob Miller",
    userName: "0xB5228D9C95be809D4e6766C0e85c21cFD7321369",
    avatar: "",
    text: "Gm Web3",
    isProfileImageNft: true,
    timeStamp: "2021-09-01T12:00:00.000Z",
  },
];

export default function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            38
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timeStamp={tweet.timeStamp}
        />
      ))}
    </div>
  );
}
