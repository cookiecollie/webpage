import { BrowserRouter } from "react-router-dom"
import { NavItemObject, Navbar } from "./components/composite"
import { Separator } from "./components/style"

function App() {
    const navbarItems: NavItemObject[] = [
        { itemKey: "", name: "Home" },
        { itemKey: "gallery", name: "Gallery" },
        { itemKey: "links", name: "Links" },
        { itemKey: "commission", name: "Commission" },
        { itemKey: "form", name: "Request Form" },
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

                <div className="flex flex-1 justify-center py-10">
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
                </div>

                <div className="flex">Footer</div>
            </div>
        </BrowserRouter>
    )
}

export default App
