import {
    FormErrorMessage,
    FormErrorMessageProps,
} from "@chakra-ui/form-control"

export const CustomErrorMessage = (
    props: React.ComponentProps<"div"> & FormErrorMessageProps
) => {
    return (
        <FormErrorMessage
            {...props}
            className="text-sm font-bold text-error-_"
        />
    )
}
