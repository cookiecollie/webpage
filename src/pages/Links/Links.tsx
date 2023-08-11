import { motion } from "framer-motion"
import { Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"

export const Links = () => {
    return (
        <motion.div
            className="flex [&>*]:flex"
            variants={fadeUpVariants}
            transition={{ duration: 1 }}
        >
            <Typography>Links</Typography>
        </motion.div>
    )
}
