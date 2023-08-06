import { PolyCompProp } from "../../primtives"

interface TypoProps {
    textAlign?: "left" | "right" | "center" | "justify" | "start" | "end"
}

export const Typography = <Comp extends React.ElementType>(
    props: PolyCompProp<Comp, TypoProps>
) => {
    const { as, children, variant, textAlign = "left" } = props
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
            : "text-justify"

    return (
        <Component {...props} className={`${variant} ${alignment}`}>
            {children}
        </Component>
    )
}
