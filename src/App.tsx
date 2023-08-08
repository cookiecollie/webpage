import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { BrowserRouter } from "react-router-dom"
import { Footer, Navbar, SocialIconObject } from "./components/composite"
import { Separator } from "./components/style"
import { Commission, Gallery, Home, Links, RequestForm } from "./pages"
import { CustomRoute } from "./routes"
import { fadeDownVariants, fadeUpVariants } from "./utils/animVariants"
import { NavObjects, StaticTextObject } from "./utils/interfaces"

function App() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [staticTexts, setStaticTexts] = useState<StaticTextObject>({
        Home: {
            heading: "",
            content: [],
        },
        Gallery: "",
        Commission: "",
        Links: "",
        RequestForm: "",
    })

    useEffect(() => {
        fetch("/texts.json")
            .then((res) => res.json())
            .then((data: StaticTextObject) => {
                setStaticTexts(data)
                setIsLoaded(true)
            })
    }, [])

    const navigationObjects: NavObjects[] = [
        { itemKey: "", name: "Home", page: <Home staticTexts={staticTexts} /> },
        { itemKey: "gallery", name: "Gallery", page: <Gallery /> },
        { itemKey: "links", name: "Links", page: <Links /> },
        { itemKey: "commission", name: "Commission", page: <Commission /> },
        { itemKey: "form", name: "Request Form", page: <RequestForm /> },
    ]

    const footerSocials: SocialIconObject[] = [
        {
            itemKey: "twitter",
            icon: <FaTwitter />,
            href: "https://twitter.com/CookieCollie",
        },
        {
            itemKey: "twitch",
            icon: <FaTwitch />,
            href: "https://www.twitch.tv/cookiecollie",
        },
        {
            itemKey: "github",
            icon: <FaGithub />,
            href: "https://github.com/cookiecollie",
        },
    ]

    return (
        <BrowserRouter>
            {isLoaded && (
                <motion.div
                    className="flex h-full flex-col"
                    initial={"initial"}
                    animate={"finish"}
                >
                    <motion.div
                        className="flex min-h-max items-center"
                        transition={{ duration: 1 }}
                        variants={fadeDownVariants}
                    >
                        <Navbar
                            homeSection=""
                            endSection={<IoMdInformationCircleOutline />}
                            align="left"
                            items={navigationObjects}
                        />
                    </motion.div>

                    <motion.div
                        className="flex px-5"
                        transition={{ duration: 1 }}
                        variants={fadeDownVariants}
                    >
                        <Separator />
                    </motion.div>

                    <motion.div
                        // variants={fadeUpVariants}
                        transition={{ duration: 1 }}
                        className="min-h-max flex-1 px-28 py-16 text-secondary"
                    >
                        <CustomRoute route={navigationObjects} />
                    </motion.div>

                    <motion.div
                        className="flex px-5"
                        transition={{ duration: 1 }}
                        variants={fadeUpVariants}
                    >
                        <Separator />
                    </motion.div>

                    <motion.div
                        className="flex min-h-max"
                        transition={{ duration: 1 }}
                        variants={fadeUpVariants}
                    >
                        <Footer socialsItems={footerSocials} />
                    </motion.div>
                </motion.div>
            )}
        </BrowserRouter>
    )
}

export default App
