import { motion } from "framer-motion"
import { useEffect } from "react"
import {
    blockSimpleFade,
    cornerExpandBL,
    cornerExpandBR,
    cornerExpandTL,
    cornerExpandTR,
} from "../../../utils/animVariants"
import { Typography } from "../../style"

interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    position?: "left" | "top" | "right" | "bottom"
    size?: "sm" | "lg" | "xl" | "full"
    animationPosition?:
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right"
}

export const Drawer = (props: React.PropsWithChildren<DrawerProps>) => {
    const {
        isOpen,
        onClose,
        children,
        position = "right",
        size = "sm",
        animationPosition = "top-right",
    } = props

    const _position =
        position === "left"
            ? "drawer-left"
            : position === "top"
            ? "drawer-top"
            : position === "right"
            ? "drawer-right"
            : "drawer-bottom"

    const _size =
        position === "top" || position === "bottom"
            ? size === "sm"
                ? "drawer-y-sm"
                : size === "lg"
                ? "drawer-y-lg"
                : size === "xl"
                ? "drawer-y-xl"
                : "drawer-y-full"
            : position === "left" || position === "right"
            ? size === "sm"
                ? "drawer-x-sm"
                : size === "lg"
                ? "drawer-x-lg"
                : size === "xl"
                ? "drawer-x-xl"
                : "drawer-x-full"
            : ""

    const _animationPos =
        animationPosition === "top-left"
            ? cornerExpandTL
            : animationPosition === "top-right"
            ? cornerExpandTR
            : animationPosition === "bottom-left"
            ? cornerExpandBL
            : cornerExpandBR

    useEffect(() => {
        isOpen
            ? document.body.classList.add("modal-open")
            : document.body.classList.remove("modal-open")
    }, [isOpen])

    return (
        <>
            <motion.div
                animate={isOpen ? "finish" : "initial"}
                variants={blockSimpleFade}
                className={
                    "fixed left-0 top-0 z-[999] h-full w-full bg-neutral-alias-fill-primary/25"
                }
                onClick={onClose}
                initial={{ opacity: 0 }}
            />

            <motion.div
                animate={isOpen ? "finish" : "initial"}
                variants={_animationPos}
                className={`${_position} ${_size}`}
                initial={{ opacity: 0 }}
            >
                {children}
            </motion.div>
        </>
    )
}

const Header = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="px-6 py-4">
            <Typography as={"h3"}>{children}</Typography>
        </div>
    )
}
Drawer.Header = Header

const Body = ({ children }: React.PropsWithChildren) => {
    return <div className="px-6 py-2">{children}</div>
}
Drawer.Body = Body
