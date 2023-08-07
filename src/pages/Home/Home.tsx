import { FaTwitch, FaTwitter } from "react-icons/fa"
import { Button, Card } from "../../components/composite"
import { Typography } from "../../components/style"
import { StaticTextObject } from "../../utils/interfaces"

interface HomeProps {
    staticTexts?: Pick<StaticTextObject, "Home">
}

export const Home = ({ staticTexts }: HomeProps) => {
    return (
        <Card variant="outlined">
            <img src="/fgx.png" className="w-72 object-cover" />

            <div className="flex flex-col justify-between">
                <Card.Body>
                    <div className="flex flex-col gap-4">
                        <Typography as={"h2"}>
                            {staticTexts?.Home.heading}
                        </Typography>

                        {staticTexts?.Home.content.map((item, i) => (
                            <Typography key={`content-${i}`}>{item}</Typography>
                        ))}

                        <Typography as={"i"} className="text-sm">
                            Artwork by @InformalScout
                        </Typography>
                    </div>
                </Card.Body>

                <Card.Footer>
                    <div className="flex gap-5">
                        <Button
                            colorScheme="primary"
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
                </Card.Footer>
            </div>
        </Card>
    )
}
