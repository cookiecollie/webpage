import { PolyCompProp } from "../../primtives"

interface TypoProps {
    textAlign?: "left" | "right" | "center" | "justify" | "start" | "end"
    className?: string
}

export const Typography = <Comp extends React.ElementType>(
    props: PolyCompProp<Comp, TypoProps>
) => {
    const { as, children, textAlign, className = "" } = props
    const Component = as || "p"

    const alignment =
        textAlign === "center"
            ? "text-center"
            : textAlign === "left"
            ? "text-left"
            : textAlign === "right"
            ? "text-right"
            : textAlign === "start"
            ? "text-start"
            : textAlign === "end"
            ? "text-end"
            : textAlign === "justify"
            ? "text-justify"
            : ""

    return (
        <Component {...props} className={`${alignment} ${className}`}>
            {children}
        </Component>
    )
}
