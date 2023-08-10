import { motion } from "framer-motion"
import { Separator, Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"
import { StaticTextObject } from "../../utils/interfaces"
import { PriceCard } from "./PriceCard"

interface Props {
    staticTexts: Pick<StaticTextObject, "Commission" | "ImgLinks">
}

export const Commission = ({ staticTexts }: Props) => {
    const { headerTexts, extras, ...priceCardinfo } = staticTexts.Commission

    return (
        <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10"
        >
            <div className="flex flex-col gap-4 text-center">
                <Typography as={"h1"}>Commission Info</Typography>

                <div className="flex flex-col gap-2">
                    {headerTexts.map((item, i) => (
                        <Typography key={`header-${i}`}>{item}</Typography>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    {Object.entries(extras).map(([k, v]) => (
                        <>
                            <Typography className="font-semibold">{`---${k}---`}</Typography>
                            {v.map((item, i) => (
                                <Typography key={i}>{item}</Typography>
                            ))}
                        </>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col divide-y [&>*:first-child]:pt-0 [&>*:last-child]:pb-0 [&>*]:py-10">
                {Object.entries(priceCardinfo).map(([k, v]) => (
                    <PriceCard
                        key={k}
                        title={v.title}
                        price={v.price}
                        descriptions={v.description}
                        exampleLink={v.exampleLink}
                        coverImgLink={
                            staticTexts.ImgLinks[
                                k as keyof typeof priceCardinfo
                            ][0]
                        }
                    />
                ))}
            </div>
        </motion.div>
    )
}
