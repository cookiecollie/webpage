import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa"
import { BrowserRouter } from "react-router-dom"
import { Footer, Navbar, SocialIconObject } from "./components/composite"
import { Separator } from "./components/style"
import { Commission, Gallery, Home, Links, RequestForm } from "./pages"
import { CustomRoute } from "./routes"
import { NavObjects } from "./utils/interfaces"

function App() {
    const navigationObjects: NavObjects[] = [
        { itemKey: "", name: "Home", page: <Home /> },
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
            <div className="flex h-full flex-col">
                <div className="flex min-h-max items-center">
                    <Navbar
                        homeSection=""
                        endSection="End"
                        align="left"
                        items={navigationObjects}
                    />
                </div>

                <div className="flex px-5">
                    <Separator />
                </div>

                <div className="flex min-h-max flex-1 justify-center py-10">
                    <CustomRoute route={navigationObjects} />
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
