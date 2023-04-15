export interface User {
	id: number;
	username: string;
	email: string;
	profile_image?: string;
	posts?: Post[];
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
