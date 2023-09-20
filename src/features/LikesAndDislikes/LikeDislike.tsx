import { incrementLike, incrementDislike } from "../posts/postsSlice";
import { useAppDispatch } from "../../app/hooks";
import { Post } from "../../appTypes.ts/types";
// @ts-ignore
import like from "../../img/like.png";
// @ts-ignore
import dislike from "../../img/dislike.png";
// @ts-ignore
import likePressed from "../../img/likePressed.png";
// @ts-ignore
import dislikePressed from "../../img/dislikePressed.png";
import "./LikeDislike.css";

const LikeDislike = (props: { post: Post }) => {
    const dispatch = useAppDispatch();
    return (
        <div className="likes-container">
            <div className="likes-container__counter">
                <button
                    onClick={() => dispatch(incrementLike(props.post.id))}
                    className="like-dislike-button"
                >
                    <img
                        src={!props.post.liked ? like : likePressed}
                        alt="like"
                        className="like-dislike-img"
                    />
                </button>
                <span>{props.post.likes}</span>
            </div>
            <div className="likes-container__counter">
                <button
                    onClick={() => dispatch(incrementDislike(props.post.id))}
                    className="like-dislike-button"
                >
                    <img
                        src={!props.post.disliked ? dislike : dislikePressed}
                        alt="like"
                        className="like-dislike-img"
                    />
                </button>
                <span>{props.post.dislikes}</span>
            </div>
        </div>
    );
};

export default LikeDislike;
