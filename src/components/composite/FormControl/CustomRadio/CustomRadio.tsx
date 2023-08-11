import { Radio, RadioProps } from "@chakra-ui/radio"

export const CustomRadio = (
    props: React.ComponentProps<"input"> & RadioProps
) => {
    return (
        <Radio
            {...props}
            className="h-4 w-4 rounded-full border-2 border-solid border-neutral-alias-border-primary before:relative before:inline-block before:h-1/2 before:w-1/2 before:rounded-[50%] before:bg-current before:[&:not([data-checked])]:content-[] [&[data-checked]]:border-primary-_ [&[data-checked]]:bg-primary-_ [&[data-checked]]:text-neutral-1 [&~span]:inline [&~span]:pt-0.5"
        />
    )
}
