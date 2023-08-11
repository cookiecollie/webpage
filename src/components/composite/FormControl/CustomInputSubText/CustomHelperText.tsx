import { FormHelperText, FormHelperTextProps } from "@chakra-ui/form-control"

export const CustomHelperText = (
    props: React.ComponentProps<"div"> & FormHelperTextProps
) => {
    return (
        <FormHelperText
            {...props}
            className="text-sm font-bold text-neutral-alias-text-tertiary"
        />
    )
}
