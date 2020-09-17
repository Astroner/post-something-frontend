export interface Pagination<DataType> {
	page: number
	hasNext: boolean
	results: DataType[]
}

export interface PostType {
	id: string
	title: string
	subTitle: string
	text: string
	author: {
		id: string
		email: string
	}
}
