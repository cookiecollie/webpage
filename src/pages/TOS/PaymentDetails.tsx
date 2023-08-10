import { FaCookie } from "react-icons/fa"
import { List } from "../../components/composite"
import { Typography } from "../../components/style"

interface Props {
    paymentDetails: string[]
}

export const PaymentDetails = ({ paymentDetails }: Props) => {
    return (
        <div className="flex flex-col gap-6">
            <Typography as={"h3"} textAlign="center">Payment Details</Typography>

            <List className="gap-4">
                {paymentDetails.map((item, i) => (
                    <List.Item key={`payment-${i}`} icon={<FaCookie />}>
                        <Typography>{item}</Typography>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}
