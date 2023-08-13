import { useEffect } from "react"

interface PageProps {
    title?: string
}

export const Page = ({
    children,
    title,
}: React.PropsWithChildren<PageProps>) => {
    useEffect(() => {
        document.title = `${title} | Cookie Collie` || "UwU"
    }, [title])
    return <div>{children}</div>
}
