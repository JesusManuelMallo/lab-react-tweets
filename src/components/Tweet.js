import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User.js";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage profileImage={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userProps={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />

        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
