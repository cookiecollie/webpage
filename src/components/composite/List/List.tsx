import React from "react"
import { IconContext } from "react-icons"

interface ListProps {
    className?: string
    listStyle?: "disc" | "decimal" | "none"
    listPosition?: "inside" | "outside"
}

export const List = ({
    children,
    listStyle,
    listPosition,
    className,
    ...props
}: React.PropsWithChildren<ListProps>) => {
    const _listInside =
        listStyle === "disc"
            ? "list-disc-inside"
            : listStyle === "decimal"
            ? "list-decimal-inside"
            : "list-none-inside"

    const _listOutside =
        listStyle === "disc"
            ? "list-disc-outside"
            : listStyle === "decimal"
            ? "list-decimal-outside"
            : "list-none-outside"
    return (
        <>
            {listStyle === "decimal" ? (
                <ol
                    className={`${
                        listPosition === "inside" ? _listInside : _listOutside
                    } ${className} flex flex-col`}
                >
                    {children}
                </ol>
            ) : (
                <ul
                    className={`${
                        listPosition === "inside" ? _listInside : _listOutside
                    } ${className} flex flex-col`}
                >
                    {children}
                </ul>
            )}
        </>
    )
}

interface ListItemProps {
    icon?: React.ReactElement
}

const ListItem = ({
    children,
    icon,
}: React.PropsWithChildren<ListItemProps>) => {
    return (
        <IconContext.Provider value={{ size: "12px" }}>
            <li className={`${icon ? "flex items-start gap-4" : ""}`}>
                {icon && (
                    <span className="inline-flex h-6 items-center">{icon}</span>
                )}
                {children}
            </li>
        </IconContext.Provider>
    )
}
List.Item = ListItem
