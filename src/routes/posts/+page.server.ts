import { getPosts } from '../../utils/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const { posts, message } = await getPosts();
	return {
		posts: posts,
		message: message
	};
}
