import Service from "@/helpers/Service"
import { Pagination, PostTypeShort, PostTypeNative } from "./ApiTypes"

const getAllPostsService = new Service<Pagination<PostTypeNative>>("/posts/")

export const getAllPosts = (
	page: number = 1
): Promise<Pagination<PostTypeShort>> =>
	getAllPostsService
		.call({
			params: {
				page,
			},
		})
		.then((res) => ({
			...res,
			results: res.results.map<PostTypeShort>((item) => ({
				displayImage:
					"https://img.buzzfeed.com/buzzfeed-static/static/2018-03/30/13/campaign_images/buzzfeed-prod-web-02/29-cool-and-random-things-you-can-probably-afford-2-3151-1522429262-9_dblbig.jpg",
				author: item.author,
				id: item.id,
				shortText: item.text.slice(0, 40),
				subTitle: item.subTitle,
				title: item.title,
			})),
		}))
