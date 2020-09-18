export interface Pagination<DataType> {
	page: number
	hasNext: boolean
	results: DataType[]
}

export interface PostTypeShort extends Omit<PostType, "text"> {
	shortText: string
}

export interface PostType extends PostTypeNative {
	displayImage: string
}

export interface PostTypeNative {
	id: string
	title: string
	subTitle: string
	text: string
	author: {
		id: string
		email: string
	}
}
