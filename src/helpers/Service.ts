import Axios, { AxiosRequestConfig } from "axios"
import env from "@/env"

export interface Config {
	url: string
	baseUrl?: string
	method?: AxiosRequestConfig["method"]
	headers?: { [key: string]: string }
}

export default class Service<ResponseType> {
	private baseUrl: string =
		env.API_ADDRESS || "https://post-something-server.herokuapp.com/"
	private url: string
	private method: AxiosRequestConfig["method"] = "GET"
	private headers: { [key: string]: string } = {}

	constructor(config: Config | string) {
		if (typeof config === "string") {
			this.url = config
		} else {
			const { url, baseUrl, method, headers }: Config = config
			if (baseUrl) this.baseUrl = baseUrl
			this.url = url
			if (method) this.method = method
			if (headers) this.headers = headers
		}
	}

	call(config?: AxiosRequestConfig, token?: string): Promise<ResponseType> {
		const headers = config?.headers
		let rest = {}
		if (config) {
			const { headers, ...res } = config
			rest = res
		}
		return new Promise((resolve, reject) => {
			Axios.request<ResponseType>({
				baseURL: this.baseUrl,
				method: this.method,
				url: this.url,
				headers: {
					...this.headers,
					Authorization: token ? `Token ${token}` : undefined,
					...headers,
				},
				...rest,
			})
				.then((e) => {
					resolve(e.data)
				})
				.catch(reject)
		})
	}
}
