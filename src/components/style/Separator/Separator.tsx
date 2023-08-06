interface SeparatorProps {
    width?: 1 | 2 | 4
}

export const Separator = ({
    children,
    width = 1,
}: React.PropsWithChildren<SeparatorProps>) => {
    return (
        <div className="inline-flex w-full items-center justify-center">
            <hr
                className={`w-full ${
                    width === 1
                        ? "border-1"
                        : width === 2
                        ? "border-2"
                        : "border-4"
                }`}
            />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-4">
                {children}
            </span>
        </div>
    )
}
