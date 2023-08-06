import { Route, Routes } from "react-router-dom"
import { NotFound } from "../pages"
import { NavObjects } from "../utils/interfaces"
import { Page } from "./Page"

interface CustomRouteProps {
    route?: NavObjects[]
}

export const CustomRoute = ({ route }: CustomRouteProps) => {
    return (
        <Routes>
            {route?.map((item) => (
                <Route
                    key={item.itemKey}
                    path={`/${item.itemKey}`}
                    element={<Page title={item.name}>{item.page}</Page>}
                />
            ))}

            <Route
                path="*"
                element={
                    <Page title="404 Not Found">
                        <NotFound />
                    </Page>
                }
            />
        </Routes>
    )
}
