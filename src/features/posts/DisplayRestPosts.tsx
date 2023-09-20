import { screenHeight, screenWidth } from "../../App";
import { Post } from "../../appTypes.ts/types";
import Button from "../../components/Button";
import LikeDislike from "../LikesAndDislikes/LikeDislike";
import "./DisplayRestPosts.css";


const DisplayRestPosts = (props: { post: Post; imgColor: string }) => {
    const [post, imgColor] = [props.post, props.imgColor];
    const srcResolutionHalf = `https://placehold.co/${Math.floor(
        screenWidth / 2.1
    )}x${Math.floor(screenHeight / 2.1)}/${imgColor}`;

    const likeDislikeProps = {
        post,
    };
    return (
        <div
            className="rest-posts-container"
            key={post.id}
            style={{ width: `${Math.floor(screenWidth / 2.1)}px` }}
        >
            <img src={srcResolutionHalf} alt="Placeholder" className="img"/>
            <div className="rest-posts-container__info">
                <div>
                    <p>
                        <strong>{post.title}</strong>
                    </p>
                </div>
                <div className="rest-posts-container__meta">
                    <LikeDislike {...likeDislikeProps} />
                    <Button text={"Читать далее"} id={`/post/${post.id}`} />
                </div>
            </div>
        </div>
    );
};

export default DisplayRestPosts;
