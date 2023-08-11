import { FormControl, FormControlProps } from "@chakra-ui/form-control"

export const CustomFormControl = (
    props: React.ComponentProps<"div"> & FormControlProps
) => {
    return <FormControl className="flex flex-col gap-2" {...props} />
}
