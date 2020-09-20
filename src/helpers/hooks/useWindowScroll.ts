import { useEffect } from "react"

/**
 *
 * @param age scroll age to be detected
 * @param cb callback for event
 *
 * @description call passed callack when scroll progress reach top | bottom;
 * @example
 *
 * const Example: FC<{}> = () => {
 *  const [isBottom, setIsBottom] = useState(false);
 *
 *  const cb = useCallback(() => {
 *      setIsBottom(true)
 *  }, [])
 *
 *  useWindowScroll("bottom", cb)
 *
 *  return (
 *      <div>{isBottom ? "bottom" : "in progress"}</div>
 *  )
 * }
 */
const useWindowScroll = (age: "top" | "bottom", cb: VoidFunction) => {
	useEffect(() => {
		const callback = (e: Event) => {
			const offset = document.documentElement.scrollTop
			const contentHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight
			const progress = (offset * 100) / contentHeight

			if (age === "bottom" && progress > 98) {
				cb()
			} else if (age === "top" && progress === 0) {
				cb()
			}
		}

		window.addEventListener("scroll", callback)

		return () => {
			window.removeEventListener("scroll", callback)
		}
	}, [age, cb])
}

export default useWindowScroll
