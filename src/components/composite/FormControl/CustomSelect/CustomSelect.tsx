import { Select, SelectProps } from "@chakra-ui/select"
import React from "react"

export const CustomSelect = (
    props: React.ComponentProps<"select"> & SelectProps
) => {
    return (
        <Select
            {...props}
            className="relative h-10 w-full appearance-none rounded-lg border-[1px] border-solid border-neutral-alias-border-primary bg-none ps-4 outline-none transition-all duration-200 invalid:border-error-active invalid:ring-1 invalid:ring-error-active focus:border-primary-active focus:ring-1 focus:ring-primary-active hover:[&:not(:focus):not(:invalid)]:border-primary-border-hover [&>div]:h-full [&>div]:w-6"
        />
    )
}
