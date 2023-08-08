import { Elevation, PolyCompProp, Surface } from "../../primtives"

interface CardProps {
    variant?: "outlined" | "elevated" | "filled"
    className?: string
    orientation?: "horizontal" | "vertical"
}

export const Card = (props: React.PropsWithChildren<CardProps>) => {
    const {
        children,
        variant = "elevated",
        className,
        orientation = "horizontal",
    } = props
    return (
        <Surface
            elevation={
                variant === "elevated" ? Elevation["level-2"] : Elevation.none
            }
            className={`${
                variant === "outlined" ? "outline outline-default" : ""
            } ${className} rounded-md`}
        >
            <div
                className={`flex h-full w-full ${
                    orientation === "horizontal" ? "flex-row" : "flex-col"
                }`}
            >
                {children}
            </div>
        </Surface>
    )
}

const SubCardComp = <Comp extends React.ElementType>({
    children,
    as,
    ...allElse
}: PolyCompProp<Comp>) => {
    const Component = as || "div"
    return (
        <Component className="p-5" {...allElse}>
            {children}
        </Component>
    )
}

Card.Header = SubCardComp
Card.Body = SubCardComp
Card.Footer = SubCardComp
