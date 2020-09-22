import { PostTypeShort } from "@/api/ApiTypes"
import { getAllPosts } from "@/api/posts"
import { useCallback, useEffect, useState } from "react"

const usePosts = () => {
	const [posts, setPosts] = useState<PostTypeShort[]>([])
	const [hasNext, setHasNext] = useState(true)
	const [cursor, setCursor] = useState(1)
	const [hasError, setHasError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let mounted = true
		setLoading(true)
		getAllPosts(cursor)
			.then((res) => {
				if (!mounted) return
				setHasNext(Boolean(res.hasNext))
				setPosts((prev) => prev.concat(res.results))
			})
			.catch(() => {
				if (!mounted) return
				setHasError(true)
			})
			.finally(() => {
				if (!mounted) return
				setLoading(false)
			})
		return () => {
			mounted = false
		}
	}, [cursor])

	const nextPage = useCallback(() => {
		if (hasNext && !loading) {
			setCursor((p) => p + 1)
		}
	}, [hasNext, loading])

	return { posts, hasNext, cursor, nextPage, hasError, loading }
}

export default usePosts
