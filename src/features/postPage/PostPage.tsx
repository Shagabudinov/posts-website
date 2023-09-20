import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { generateColor } from "../../scripts/script";
import { screenHeight, screenWidth } from "../../App";
import { Link } from "react-router-dom";
import LikeDislike from "../LikesAndDislikes/LikeDislike";
import { Post } from "../../appTypes.ts/types";
import "./PostPage.css";
import { NoUnderlineLink } from "../../components/Button";

const PostPage = () => {
    const { id } = useParams();
    const currentPost = useAppSelector((state) => state.posts.posts).find(
        (post) => post.id === Number(id)
    );
    const likeDislikeProps = {
        post: currentPost ? currentPost : ({} as Post),
    };
    return (
        <div className="post-page-container">
            <div>
                <div className="post-page-container__meta">
                    <NoUnderlineLink
                        to="/"
                        customClassName="post-page-container__button-back"
                    >
                        <p>&larr;Вернуться к статьям</p>
                    </NoUnderlineLink>
                    <LikeDislike {...likeDislikeProps} />
                </div>
                <div>
                    <h3>{currentPost?.title}</h3>
                </div>
            </div>

            <div className="post-page-container__info">
                <img
                    src={`https://placehold.co/${Math.floor(
                        screenWidth / 1.4
                    )}x${Math.floor(screenHeight / 1.4)}/${generateColor()}}`}
                    alt="Placeholder"
                />

                <p>{currentPost?.body}</p>
            </div>
        </div>
    );
};

export default PostPage;
