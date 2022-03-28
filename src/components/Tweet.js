import { ProfileImage } from "./ProfileImage";
import { User } from "./User";
import { Timestamp } from "./Timestamp";
import { Message } from "./Message";
import { Actions } from "./Actions";
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage IMAGE_URL={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User
            userName={props.tweet.user.name}
            userHandle={props.tweet.user.handle}
          />
          <Timestamp timeStamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
