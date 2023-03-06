interface User {
	id: number;
	username: string;
	email: string;
	password: string;
	profile_image?: string;
	followers: User[];
	followings: User[];
	posts: Post[];
}

export interface Post {
	id: number;
	title: string;
	body: string;
	published: boolean;
	created_at: string;
	updated_at: string;
	author: User;
	author_id: number;
}
