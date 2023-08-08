import { motion } from "framer-motion"
import { FaTwitch, FaTwitter } from "react-icons/fa"
import { Button } from "../../components/composite"
import { Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"
import { StaticTextObject } from "../../utils/interfaces"

interface HomeProps {
    staticTexts?: Pick<StaticTextObject, "Home">
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
                className="w-72 rounded-lg object-cover"
                alt="Drawing of my OC Cookie, by InformalScout"
                title="Drawing of my OC Cookie, by InformalScout"
            />

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <Typography as={"h2"} className="font-medium">
                        {staticTexts?.Home.heading}
                    </Typography>

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
                        variant="outline"
                        leftIcon={<FaTwitter />}
                        as={"a"}
                        href="https://twitter.com/CookieCollie"
                        target="_blank"
                        rel="nopenner noreferrer"
                        style={{
                            color: "#00acee",
                            outlineColor: "#00acee",
                        }}
                    >
                        Twitter
                    </Button>

                    <Button
                        colorScheme="neutral"
                        variant="outline"
                        leftIcon={<FaTwitch />}
                        as={"a"}
                        href="https://www.twitch.tv/cookiecollie"
                        target="_blank"
                        rel="nopenner noreferrer"
                        style={{
                            color: "#6441a5",
                            outlineColor: "#6441a5",
                        }}
                    >
                        Twitch
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
