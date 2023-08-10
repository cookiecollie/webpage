import { IconContext } from "react-icons"
import { FaCookie, FaLink } from "react-icons/fa"
import { Card, List } from "../../components/composite"
import { Separator, Typography } from "../../components/style"

interface Props {
    title?: string
    descriptions?: string[]
    price?: string
    exampleLink?: string
    coverImgLink?: string
}

export const PriceCard = ({
    descriptions,
    title,
    price,
    exampleLink,
    coverImgLink,
}: Props) => {
    return (
        <Card variant="simple">
            <div className="flex w-full gap-8">
                <img
                    src={coverImgLink}
                    className=" h-64 w-64 rounded-default bg-neutral-4 object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <Typography as={"h3"}>{title}</Typography>

                        <Typography as={"h5"}>{price}</Typography>

                        <div>
                            <List className="gap-1">
                                {descriptions?.map((item, i) => (
                                    <List.Item
                                        key={`description-${title}-${i}`}
                                        icon={<FaCookie />}
                                    >
                                        <Typography>{item}</Typography>
                                    </List.Item>
                                ))}
                            </List>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Separator />

                        <div>
                            <a
                                href={exampleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm hover:underline"
                            >
                                More examples
                                <span>
                                    <IconContext.Provider
                                        value={{ size: "12px" }}
                                    >
                                        <FaLink />
                                    </IconContext.Provider>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
