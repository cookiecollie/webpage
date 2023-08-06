import { Elevation, Surface } from "../../primtives"

interface CardProps {
    variant?: "outlined" | "elevated" | "filled"
    className?: string
}

export const Card = (props: React.PropsWithChildren<CardProps>) => {
    const { children, variant = "elevated", className } = props
    return (
        <Surface
            elevation={
                variant === "elevated" ? Elevation["level-2"] : Elevation.none
            }
            className={`${
                variant === "outlined" ? "outline outline-default" : ""
            } ${className} rounded-md`}
        >
            {children}
        </Surface>
    )
}

const SubCardComp = ({ children }: React.PropsWithChildren) => {
    return <div className="p-5">{children}</div>
}

Card.Header = SubCardComp
Card.Body = SubCardComp
Card.Footer = SubCardComp
