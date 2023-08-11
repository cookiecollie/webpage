import { FormLabel, FormLabelProps } from "@chakra-ui/form-control"

export const CustomLabel = (
    props: React.ComponentProps<"label"> & FormLabelProps
) => {
    return <FormLabel {...props} className="font-semibold [&>span]:text-error-_ [&>span]:ms-1"/>
}
