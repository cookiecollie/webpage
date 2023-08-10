export enum Elevation {
    "level-1" = "shadow-sm",
    "level-2" = "shadow",
    "level-3" = "shadow-md",
    "level-4" = "shadow-lg",
    "level-5" = "shadow-xl",
    "level-6" = "shadow-2xl",
    "none" = "shadow-none",
}

interface SurfaceProps {
    elevation?: Elevation
    className?: string
}

export const Surface = (props: React.PropsWithChildren<SurfaceProps>) => {
    const { children, elevation, className } = props
    return <div className={`${elevation} ${className} flex`}>{children}</div>
}
