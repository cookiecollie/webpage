import { motion } from "framer-motion"
import { IconContext } from "react-icons"
import { Typography } from "../../style"

interface FooterProps {
    socialsItems?: SocialIconObject[]
}

export interface SocialIconObject {
    icon?: React.ReactNode
    itemKey?: string
    href?: string
}

export const Footer = ({ socialsItems }: FooterProps) => {
    return (
        <div className="flex h-32 w-full items-center justify-between px-20 text-quaternary">
            <div>
                <Typography className="text-sm">
                    © 2023 CookieCollie. All rights reserved.
                </Typography>
            </div>

            <div className="flex">
                <IconContext.Provider value={{ size: "24px" }}>
                    <div className="flex gap-8">
                        {socialsItems?.map((item) => (
                            <motion.a
                                key={item.itemKey}
                                href={item.href}
                                target="_blank"
                                rel="noopenner noreferrer"
                                whileHover={{ scale: 1.2 }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}
