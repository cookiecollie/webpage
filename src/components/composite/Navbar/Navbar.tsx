import { motion } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"
import { NavObjects } from "../../../utils/interfaces"

interface NavbarProps {
    items?: Pick<NavObjects, "itemKey" | "name">[]
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

const NavbarItem = ({
    itemKey,
    name,
}: Pick<NavObjects, "itemKey" | "name">) => {
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
        <NavLink to={`/${itemKey}`} className={"block"}>
            <motion.div
                whileHover={"hover"}
                whileTap={"click"}
                className="relative flex h-full items-center"
            >
                <motion.p variants={itemVariant}>{name}</motion.p>

                <motion.div
                    className="absolute bottom-0 flex h-0.5 w-full justify-center"
                    animate={isActive ? "active" : "inactive"}
                >
                    <motion.div
                        className="rounded-s-full bg-primary-_"
                        variants={indicatorVariant}
                    />
                    <motion.div
                        className="rounded-e-full bg-primary-_"
                        variants={indicatorVariant}
                    />
                </motion.div>
            </motion.div>
        </NavLink>
    )
}
