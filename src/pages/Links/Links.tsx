import { motion } from "framer-motion"
import {
    FaDiscord,
    FaTumblr,
    FaTwitch,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa"
import { SiKofi } from "react-icons/si"
import { Button } from "../../components/composite"
import { Separator, Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"

export const Links = () => {
    return (
        <motion.div
            className="flex flex-col gap-10 text-center [&>div]:flex [&>div]:flex-col"
            variants={fadeUpVariants}
            transition={{ duration: 1 }}
        >
            <div className="gap-4">
                <Typography as={"h1"}>Social Links</Typography>
                <Typography>You can find me at these places,too!</Typography>
            </div>

            <Separator />

            <div>
                <div className="grid grid-cols-3 gap-5 px-10">
                    <Button
                        as={"a"}
                        colorScheme="none"
                        className="link-button-twitter"
                        leftIcon={<FaTwitter />}
                        href="https://twitter.com/CookieCollie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </Button>

                    <Button
                        as={"a"}
                        colorScheme="none"
                        className="link-button-twitch"
                        leftIcon={<FaTwitch />}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.twitch.tv/cookiecollie"
                    >
                        Twitch
                    </Button>

                    <Button
                        as={"a"}
                        colorScheme="none"
                        className="link-button-youtube"
                        leftIcon={<FaYoutube />}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UC_d-mYXMM9ZY_XNnI7Qu-yw"
                    >
                        Youtube
                    </Button>

                    <Button
                        as={"a"}
                        colorScheme="none"
                        className="link-button-discord"
                        leftIcon={<FaDiscord />}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://discord.gg/YrhgDeSZDX"
                    >
                        Discord Server
                    </Button>

                    <Button
                        as={"a"}
                        colorScheme="none"
                        className="link-button-tumblr"
                        leftIcon={<FaTumblr />}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tumblr.com/cookiecollie"
                    >
                        Tumblr
                    </Button>

                    <Button
                        as={"a"}
                        colorScheme="none"
                        className="link-button-kofi"
                        leftIcon={<SiKofi />}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ko-fi.com/cookiecollie"
                    >
                        Ko-fi
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
