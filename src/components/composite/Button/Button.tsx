import { IconContext } from "react-icons"
import { PolyCompProp } from "../../primtives"

export interface ButtonProps {
    variant?: "solid" | "ghost" | "outline"
    colorScheme?:
        | "primary"
        | "success"
        | "warning"
        | "error"
        | "neutral"
        | "none"
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
}

export const Button = <Comp extends React.ElementType>(
    props: PolyCompProp<Comp, ButtonProps>
) => {
    const {
        as,
        children,
        colorScheme = "primary",
        variant = "solid",
        leftIcon,
        rightIcon,
        className,
        ...allElse
    } = props
    const Component = as || "button"

    const _primary =
        variant === "solid"
            ? "button-solid-primary"
            : variant === "ghost"
            ? "button-ghost-primary"
            : "button-outline-primary"

    const _success =
        variant === "solid"
            ? "button-solid-success"
            : variant === "ghost"
            ? "button-ghost-success"
            : "button-outline-success"

    const _warning =
        variant === "solid"
            ? "button-solid-warning"
            : variant === "ghost"
            ? "button-ghost-warning"
            : "button-outline-warning"

    const _error =
        variant === "solid"
            ? "button-solid-error"
            : variant === "ghost"
            ? "button-ghost-error"
            : "button-outline-error"

    const _neutral =
        variant === "solid"
            ? "button-solid-neutral"
            : variant === "ghost"
            ? "button-ghost-neutral"
            : "button-outline-neutral"

    return (
        <Component
            className={`flex h-10 items-center justify-between px-5 font-medium transition-colors duration-300 ease-in-out [&>span:first-child]:ms-0 [&>span:last-child]:me-0 [&>span]:mx-2 ${className} ${
                colorScheme === "primary"
                    ? _primary
                    : colorScheme === "success"
                    ? _success
                    : colorScheme === "warning"
                    ? _warning
                    : colorScheme === "error"
                    ? _error
                    : colorScheme === "neutral"
                    ? _neutral
                    : ""
            }`}
            style={{
                userSelect: "none",
                msUserSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                cursor: "pointer",
            }}
            {...allElse}
        >
            <IconContext.Provider value={{ size: "16px" }}>
                <span className="inline-flex flex-1 justify-end">
                    {leftIcon}
                </span>
                <span className={leftIcon && rightIcon ? "" : "!mx-0"}>
                    {children}
                </span>
                <span className="inline-flex flex-1">{rightIcon}</span>
            </IconContext.Provider>
        </Component>
    )
}
