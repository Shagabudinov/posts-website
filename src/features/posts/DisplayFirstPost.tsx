import { screenHeight, screenWidth } from "../../App";
import { Post } from "../../appTypes.ts/types";
import Button from "../../components/Button";
import LikeDislike from "../LikesAndDislikes/LikeDislike";
import "./DisplayFirstPost.css";

const DisplayFirstPost = (props: { post: Post; imgColor: string }) => {
    const [post, imgColor] = [props.post, props.imgColor];
    const srcResolutionFull = `https://placehold.co/${screenWidth}x${screenHeight}/${imgColor}}`;

    const likeDislikeProps = {
        post,
    };
    return (
        <div key={post.id} className="first-post-container">
            <img src={srcResolutionFull} alt="Placeholder" className="img" />
            <div className="first-post-container__info">
                <div>
                    <p>
                        <strong>{post.title}</strong>
                    </p>
                    <br></br>
                    <LikeDislike {...likeDislikeProps} />
                </div>
                <div>
                    <p>{post.body}</p>
                </div>
                <div
                    style={{ textAlign: "right", margin: "24px 4px 12px 0px" }}
                >
                    <Button text={"Читать далее"} id={`/post/${post.id}`} />
                </div>
            </div>
        </div>
    );
};

export default DisplayFirstPost;
