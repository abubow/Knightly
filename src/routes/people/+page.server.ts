import { getAllUsers } from "../../utils/api";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const { users, message } = await getAllUsers();
    return {
        users: users,
        message: message
    };
}