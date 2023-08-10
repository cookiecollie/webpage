import { FaCookie } from "react-icons/fa"
import { List } from "../../components/composite"
import { Separator, Typography } from "../../components/style"

interface Props {
    tos: string[]
    importants: string[]
}

export const GeneralTOS = ({ tos, importants }: Props) => {
    return (
        <div className="flex flex-col gap-6">
            <Typography as={"h3"} textAlign="center">General TOS</Typography>

            <List className="gap-4">
                {tos.map((item, i) => (
                    <List.Item key={`tos-${i}`} icon={<FaCookie />}>
                        {item}
                    </List.Item>
                ))}
            </List>

            <div className="w-96 self-center">
                <Separator>
                    <span className="inline-flex gap-2">
                        <FaCookie />
                        <FaCookie />
                        <FaCookie />
                    </span>
                </Separator>
            </div>

            <Typography as={"h4"} textAlign="center">
                READ THESE CAREFULLY IF YOU DO NOT WANT TO BE BLACKLISTED
            </Typography>

            <List className="gap-4">
                {importants.map((item, i) => (
                    <List.Item key={`important-${i}`} icon={<FaCookie />}>
                        <Typography>{item}</Typography>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}
