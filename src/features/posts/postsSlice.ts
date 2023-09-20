import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../async/fetchPosts";
import { postsInitialState } from "../../appTypes.ts/types";
import { generateRandomValue } from "../../scripts/script";

const initialState: postsInitialState = {
    posts: [],
    isLoading: false,
    error: null,
};

export const incrementLike = (postId: number) => {
    return {
        type: "posts/incrementLike",
        payload: postId,
    };
};

export const incrementDislike = (postId: number) => {
    return {
        type: "posts/incrementDislike",
        payload: postId,
    };
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        incrementLike: (state, action) => {
            const postId = action.payload;
            const postToUpdate = state.posts.find((post) => post.id === postId);
            if (postToUpdate && postToUpdate?.disliked) {
                postToUpdate.liked = true
                postToUpdate.likes += 1;
                postToUpdate.disliked = false
                postToUpdate.dislikes -= 1;
            }
            else if (postToUpdate && !postToUpdate?.liked){
                postToUpdate.liked = true
                postToUpdate.likes += 1;
            }
            else if (postToUpdate && postToUpdate?.liked) {
                postToUpdate.liked = false
                postToUpdate.likes -= 1;
            }
        },
        incrementDislike: (state, action) => {
            const postId = action.payload;
            const postToUpdate = state.posts.find((post) => post.id === postId);
            if (postToUpdate && postToUpdate?.liked) {
                postToUpdate.disliked = true
                postToUpdate.dislikes += 1;
                postToUpdate.liked = false
                postToUpdate.likes -= 1;
            }
            else if (postToUpdate && !postToUpdate?.disliked){
                postToUpdate.disliked = true
                postToUpdate.dislikes += 1;
            }
            else if (postToUpdate && postToUpdate?.disliked) {
                postToUpdate.disliked = false
                postToUpdate.dislikes -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchPosts.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.posts = action.payload.map((post: any) => ({
                        ...post,
                        likes: generateRandomValue(),
                        dislikes: generateRandomValue(),
                        liked: false,
                        disliked: false,
                    }));
                    state.error = null;
                }
            )
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            });
    },
});

export default postsSlice.reducer;
