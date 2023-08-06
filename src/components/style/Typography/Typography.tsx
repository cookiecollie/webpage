import { PolyCompProp } from "../../primtives"

export const Typography = <Comp extends React.ElementType>(
    props: PolyCompProp<Comp>
) => {
    const { as, children, variant } = props
    const Component = as || "p"
    return (
        <Component {...props} className={variant}>
            {children}
        </Component>
    )
}
