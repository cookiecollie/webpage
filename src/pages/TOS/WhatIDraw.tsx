import { IconContext } from "react-icons"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { Typography } from "../../components/style"

interface Props {
    willDraw: string[]
    willNotDraw: string[]
}

export const WhatIDraw = ({ willDraw, willNotDraw }: Props) => {
    return (
        <IconContext.Provider value={{ size: "48px" }}>
            <div className="flex flex-col gap-12 text-center">
                <Typography as={"h3"}>
                    What I will and will not draw
                </Typography>

                <div className="flex divide-x [&>*]:px-5 [&>*]:flex-1">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center text-success-_">
                            <AiOutlineCheckCircle />
                        </div>

                        <Typography as={"h4"}>What I will draw</Typography>

                        {willDraw.map((item, i) => (
                            <Typography key={`willdraw-${i}`}>
                                {item}
                            </Typography>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center text-error-_">
                            <AiOutlineCloseCircle />
                        </div>

                        <Typography as={"h4"}>What I will not draw</Typography>

                        {willNotDraw.map((item, i) => (
                            <Typography key={`willnotdraw-${i}`}>
                                {item}
                            </Typography>
                        ))}
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}
