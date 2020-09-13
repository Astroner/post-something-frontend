import Service from "@/helpers/Service"

const CreateUserService = new Service({
	method: "POST",
	url: "/user/signup",
})

/**
 *
 * @param email user email
 * @param password user password
 * @param fname user first name
 * @param lname user last name
 */
export const createUser = (
	email: string,
	password: string,
	fname: string,
	lname: string
) =>
	CreateUserService.call({
		data: {
			email,
			password,
			first_name: fname,
			last_name: lname,
		},
	})

const SignInService = new Service<{ token: string }>({
	method: "POST",
	url: "/user/signin/",
})

export const signIn = (email: string, password: string) =>
	SignInService.call({
		data: {
			email,
			password,
		},
	})

const ProfileService = new Service<{
	email: string
	first_name: string
	last_name: string
}>("/user/profile/")

export const getProfile = (token: string) =>
	ProfileService.call({
		headers: {
			Authorization: `Token ${token}`,
		},
	})
