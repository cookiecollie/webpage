import { motion } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"

interface NavbarProps {
    items?: NavItemObject[]
    homeSection?: React.ReactNode
    endSection?: React.ReactNode
    align?: "left" | "center" | "right"
}

export const Navbar = (props: NavbarProps) => {
    const { endSection, homeSection, items, align = "left" } = props

    return (
        <div
            className="flex h-20 w-full items-center justify-between gap-5 px-10 py-0 text-md"
            style={{
                userSelect: "none",
                msUserSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
            }}
        >
            {(homeSection || align === "center") && (
                <div className={`flex ${align === "left" ? "" : "flex-1"}`}>
                    {homeSection}
                </div>
            )}

            <div className="flex h-full gap-8">
                {items?.map((item) => (
                    <NavbarItem
                        key={item.itemKey}
                        itemKey={item.itemKey}
                        name={item.name}
                    />
                ))}
            </div>

            {(endSection || align === "center") && (
                <div
                    className={`flex  justify-end ${
                        align === "right" ? "" : "flex-1"
                    }`}
                >
                    {endSection}
                </div>
            )}
        </div>
    )
}

interface NavbarItemProps {
    name?: string
    itemKey?: string
}

export interface NavItemObject extends NavbarItemProps {}

const NavbarItem = ({ itemKey, name }: NavbarItemProps) => {
    const isActive = useLocation().pathname.replace(/\//g, "") === itemKey

    const itemVariant = {
        hover: {
            y: -5,
        },

        click: {
            y: 5,
        },
    }

    const indicatorVariant = {
        hover: {
            opacity: 1,
        },

        active: {
            width: "100%",
            transition: {
                ease: [0.2, 0.7, 0.8, 0.7],
                type: "tween",
                duration: 0.5,
            },
        },

        inactive: {
            width: 0,
            transition: {
                ease: [0.8, 0.3, 0.2, 0.3],
                type: "tween",
                duration: 0.25,
            },
        },
    }

    return (
        <motion.div
            whileHover={"hover"}
            whileTap={"click"}
            className="relative flex flex-col justify-center"
        >
            <motion.div variants={itemVariant}>
                <NavLink to={`/${itemKey}`}>{name}</NavLink>
            </motion.div>

            <motion.div
                className="absolute bottom-0 flex h-0.5 w-full justify-center"
                animate={isActive ? "active" : "inactive"}
            >
                <motion.div
                    className="rounded-s-full bg-blue-5"
                    variants={indicatorVariant}
                />
                <motion.div
                    className="rounded-e-full bg-blue-5"
                    variants={indicatorVariant}
                />
            </motion.div>
        </motion.div>
    )
}
