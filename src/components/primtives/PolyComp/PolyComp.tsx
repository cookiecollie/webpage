type AsProp<Comp extends React.ElementType> = {
    as?: Comp
}

type PropsToOmit<Comp extends React.ElementType, Props> = keyof (AsProp<Comp> &
    Props)

export type PolyCompProp<
    Comp extends React.ElementType,
    Props = object,
> = React.PropsWithChildren<Props & AsProp<Comp>> &
    Omit<React.ComponentPropsWithoutRef<Comp>, PropsToOmit<Comp, Props>>
