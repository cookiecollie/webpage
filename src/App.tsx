import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa"
import { BrowserRouter } from "react-router-dom"
import {
    Footer,
    NavItemObject,
    Navbar,
    SocialIconObject,
} from "./components/composite"
import { Separator } from "./components/style"

function App() {
    const navbarItems: NavItemObject[] = [
        { itemKey: "", name: "Home" },
        { itemKey: "gallery", name: "Gallery" },
        { itemKey: "links", name: "Links" },
        { itemKey: "commission", name: "Commission" },
        { itemKey: "form", name: "Request Form" },
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
            <div className="flex h-full flex-col">
                <div className="flex min-h-max items-center">
                    <Navbar
                        homeSection=""
                        endSection="End"
                        align="left"
                        items={navbarItems}
                    />
                </div>

                <div className="flex px-5">
                    <Separator />
                </div>

                <div className="flex min-h-max flex-1 justify-center py-10">
                    {/* <Card variant="outlined" className="w-64">
                        <Card.Header>
                            <Typography as={"h5"} textAlign="center">
                                Card Header
                            </Typography>
                        </Card.Header>

                        <Card.Body>
                            <Typography>Card Body</Typography>
                            <Typography>Card Body</Typography>
                        </Card.Body>

                        <Card.Footer>
                            <Typography>Card Footer</Typography>
                        </Card.Footer>
                    </Card> */}
                    <div className="h-full" />
                </div>

                <div className="flex px-5">
                    <Separator />
                </div>

                <div className="flex min-h-max">
                    <Footer socialsItems={footerSocials} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
