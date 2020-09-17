import Service from "@/helpers/Service"
import { Pagination, PostType } from "./ApiTypes"

const getAllPostsService = new Service<Pagination<PostType>>("/posts/")

export const getAllPosts = (page: number = 1) =>
	getAllPostsService.call({
		params: {
			page,
		},
	})
