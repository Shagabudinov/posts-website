import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPosts } from "../../async/fetchPosts";
import { Post } from "../../appTypes.ts/types";
import DisplayFirstPost from "./DisplayFirstPost";
import DisplayRestPosts from "./DisplayRestPosts";
import { generateColor } from "../../scripts/script";
import "./PostsList.css"

export const PostsList = () => {
    const dispatch = useAppDispatch();
    const posts: Post[] = useAppSelector((state) => state.posts.posts);
    const generatedImageColor = generateColor();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
            className="posts-container"
        >
            {posts.map((post, index) => {
                const commonProps = {
                    key: post.id,
                    post,
                    imgColor: generatedImageColor,
                };
                return index === 0 ? (
                    <DisplayFirstPost {...commonProps} />
                ) : (
                    <DisplayRestPosts {...commonProps} />
                );
            })}
        </div>
    );
};

export default PostsList;
