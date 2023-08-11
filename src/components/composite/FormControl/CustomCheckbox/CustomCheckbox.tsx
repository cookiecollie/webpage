import { Checkbox, CheckboxProps } from "@chakra-ui/checkbox"

export const CustomCheckbox = (
    props: React.ComponentProps<"input"> & CheckboxProps
) => {
    return (
        <Checkbox
            {...props}
            className="[&>span:first-of-type]:h-4 [&>span:first-of-type]:w-4 [&>span:first-of-type]:rounded-sm [&>span:first-of-type]:border-2 [&>span:first-of-type]:border-solid [&>span:first-of-type]:border-neutral-alias-border-primary [&>span[data-checked]:first-of-type>div]:w-3 [&>span[data-checked]:first-of-type]:border-primary-_ [&>span[data-checked]:first-of-type]:bg-primary-_ [&>span[data-checked]:first-of-type]:text-neutral-1 [&>span[data-disabled]:first-of-type]:border-none [&>span[data-disabled]:first-of-type]:bg-neutral-alias-border-primary [&>span[data-disabled]]:text-neutral-alias-text-quaternary"
        />
    )
}
