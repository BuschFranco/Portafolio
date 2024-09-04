import { db, user } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(user).values([{
		id: 1,
		email: "gemantrolo@gmail.com",
		userName: "Ernesto",
		phoneNumber: "1122334455",
	}])
}
