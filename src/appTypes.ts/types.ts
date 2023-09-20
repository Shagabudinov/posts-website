export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    likes: number;
    dislikes: number;
    liked: boolean;
    disliked: boolean;
}

export interface LikesAndDislikes {
    likes: number;
    dislikes: number;
}

export interface postsInitialState {
    posts: Post[];
    isLoading: boolean;
    error: any;
}

export interface NoUnderlineLinkProps {
    to: string;
    children: React.ReactNode;
    customClassName?: string; // Новый пропс для передачи класса
}
