import type { Post } from './type';

const urlBase = 'http://localhost:8800';
export async function get(url: string) {
	// fetch in the get method
	return fetch(`${urlBase}${url}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(
			(response) => {
                console.log(response);
				if (response.ok) {
					return response.json();
				} else {
					return response.json().then((err) => {
						throw err;
					});
				}
			},
			(err) => {
				throw err;
			}
		)
		.catch((err) => {
			console.log(err);
		});
}

export async function getPosts() {
	return get('/posts');
}

export async function getPost(id: string) {
	return get(`/posts/${id}`);
}

export async function getAllUsers() {
	return get('/users');
}