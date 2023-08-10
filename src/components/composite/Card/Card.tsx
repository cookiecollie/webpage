import { Elevation, PolyCompProp, Surface } from "../../primtives"

interface CardProps {
    variant?: "outline" | "elevated" | "simple"
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

    const _horizontal =
        variant === "simple"
            ? "card-simple-horizontal"
            : variant === "elevated"
            ? "card-elevated-horizontal"
            : "card-outline-horizontal"

    const _vertical =
        variant === "simple"
            ? "card-simple-vertical"
            : variant === "elevated"
            ? "card-elevated-vertical"
            : "card-outline-vertical"
    return (
        <Surface
            elevation={
                variant === "elevated" ? Elevation["level-2"] : Elevation.none
            }
            className={`${
                className
                    ? className
                    : orientation === "horizontal"
                    ? _horizontal
                    : _vertical
            } overflow-hidden`}
        >
            {children}
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
