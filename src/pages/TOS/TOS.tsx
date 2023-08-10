import { motion } from "framer-motion"
import { Separator, Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"
import { StaticTextObject } from "../../utils/interfaces"
import { GeneralTOS } from "./GeneralTOS"
import { PaymentDetails } from "./PaymentDetails"
import { ProcessDetails } from "./ProcessDetails"
import { WhatIDraw } from "./WhatIDraw"

interface Props {
    staticText: Pick<StaticTextObject, "TOS">
}

export const TOS = ({ staticText }: Props) => {
    const { tos, commDetails, importants } = staticText.TOS
    return (
        <motion.div
            className="flex flex-col gap-10"
            variants={fadeUpVariants}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-4 text-center">
                <Typography as={"h1"}>Terms of Service</Typography>

                <Typography as={"h5"}>
                    By commissioning me, you confirm that you have read and
                    agree to the ToS below
                </Typography>
            </div>

            <Separator />

            <div className="flex flex-col divide-y [&>*:first-child]:pt-0 [&>*:last-child]:pb-0 [&>*]:py-10">
                <GeneralTOS tos={tos} importants={importants} />

                <ProcessDetails processDetails={commDetails.details} />

                <PaymentDetails paymentDetails={commDetails.paymentProcess} />

                <WhatIDraw
                    willDraw={commDetails.willDraw}
                    willNotDraw={commDetails.willNotDraw}
                />
            </div>
        </motion.div>
    )
}
