import { motion } from "framer-motion"
import { FaTwitch, FaTwitter } from "react-icons/fa"
import { Button } from "../../components/composite"
import { Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"
import { StaticTextObject } from "../../utils/interfaces"

interface HomeProps {
    staticTexts: Pick<StaticTextObject, "Home">
}

export const Home = ({ staticTexts }: HomeProps) => {
    return (
        <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 1 }}
            className="flex gap-10"
        >
            <img
                src="/fgx.png"
                className="w-72 rounded-default object-cover"
                alt="Drawing of my OC Cookie, by InformalScout"
                title="Drawing of my OC Cookie, by InformalScout"
            />

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col font-medium">
                        <Typography as={"h1"}>Heyo!</Typography>

                        <Typography as={"h3"} className="font-medium">
                            I&apos;m Cookie! Nice to meet ya!
                        </Typography>
                    </div>

                    {staticTexts?.Home.content.map((item, i) => (
                        <Typography
                            key={`content-${i}`}
                            className="text-justify"
                        >
                            {item}
                        </Typography>
                    ))}

                    <Typography as={"i"} className="text-sm">
                        Artwork by{" "}
                        <a
                            href="https://twitter.com/InformalScout"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            @InformalScout
                        </a>
                    </Typography>
                </div>

                <div className="flex gap-5">
                    <Button
                        leftIcon={<FaTwitter />}
                        className="link-button-twitter"
                        colorScheme="none"
                        as={"a"}
                        href="https://twitter.com/CookieCollie"
                        target="_blank"
                        rel="nopenner noreferrer"
                    >
                        Twitter
                    </Button>

                    <Button
                        colorScheme="none"
                        className="link-button-twitch"
                        leftIcon={<FaTwitch />}
                        as={"a"}
                        href="https://www.twitch.tv/cookiecollie"
                        target="_blank"
                        rel="nopenner noreferrer"
                    >
                        Twitch
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
