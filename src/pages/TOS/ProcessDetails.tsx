import { FaCookie } from "react-icons/fa"
import { List } from "../../components/composite"
import { Typography } from "../../components/style"

interface Props {
    processDetails: string[]
}

export const ProcessDetails = ({ processDetails }: Props) => {
    return (
        <div className="flex flex-col gap-6">
            <Typography as={"h3"} textAlign="center">Process Details</Typography>

            <List className="gap-4">
                {processDetails.map((item, i) => (
                    <List.Item key={`processdetail-${i}`} icon={<FaCookie />}>
                        <Typography>{item}</Typography>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}
