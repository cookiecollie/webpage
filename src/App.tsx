import { Card } from "./components/composite"
import { Typography } from "./components/style"

function App() {
    return (
        <>
            <div>
                <Typography as={"h1"}>Header</Typography>
            </div>
            <div className="flex justify-center">
                <Card variant="outlined" className="w-64">
                    <Card.Header>
                        <Typography as={"h5"} textAlign="center">Card Header</Typography>
                    </Card.Header>

                    <Card.Body>
                        <Typography>Card Body</Typography>
                        <Typography>Card Body</Typography>
                        <Typography>Card Body</Typography>
                        <Typography>Card Body</Typography>
                        <Typography>Card Body</Typography>
                    </Card.Body>

                    <Card.Footer>
                        <Typography>Card Footer</Typography>
                    </Card.Footer>
                </Card>
            </div>
            <div>Footer</div>
        </>
    )
}

export default App
