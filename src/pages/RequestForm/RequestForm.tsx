import { Input } from "@chakra-ui/input"
import { RadioGroup } from "@chakra-ui/radio"
import { Select } from "@chakra-ui/select"
import { Textarea } from "@chakra-ui/textarea"
import { motion } from "framer-motion"
import { useState } from "react"
import { sendRequestForm, testAPI } from "../../api"
import {
    Button,
    CustomCheckbox,
    CustomErrorMessage,
    CustomFormControl,
    CustomLabel,
    CustomRadio,
} from "../../components/composite"
import { Separator, Typography } from "../../components/style"
import { fadeUpVariants } from "../../utils/animVariants"
import { StaticTextObject } from "../../utils/interfaces"
import { useValidation } from "../../utils/useValidation"

interface Props {
    staticTexts: Pick<StaticTextObject, "RequestForm">
}

export const RequestForm = ({ staticTexts }: Props) => {
    const { formGuide, headerTexts } = staticTexts.RequestForm
    const emailValidator = useValidation("email")
    const refSheetValidator = useValidation("none")

    const [detailedBG, setDetailedBG] = useState(false)
    const [additionalChar, setAdditionalChar] = useState(false)
    const [commType, setCommType] = useState("Emotes")
    const handleCommTypeOnChange = (e: any) => {
        setCommType(e.target.value)
        setDetailedBG(false)
    }

    const [sendStatus, setSendStatus] = useState("")
    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        const formValue = {
            email: e.target.elements["email"].value,
            name: e.target.elements["name"].value,
            "comm-type": e.target.elements["comm-type"].value,
            "detailed-bg": e.target.elements["detailed-bg"].checked,
            "additional-char": e.target.elements["additional-char"].checked,
            "ref-links": e.target.elements["ref-links"].value,
            "is-secret": e.target.elements["is-secret"].value,
            contacts: e.target.elements["contacts"].value,
            "extra-info": e.target.elements["extra-info"].value,
        }
        console.log(formValue)
        sendRequestForm(formValue, "", setSendStatus)
    }

    return (
        <motion.div
            className="flex flex-col gap-10 text-center [&>div]:flex [&>div]:flex-col"
            variants={fadeUpVariants}
            transition={{ duration: 1 }}
        >
            <div className="gap-4">
                <Typography as={"h1"}>Request Form</Typography>

                <div className="flex flex-col gap-2">
                    {headerTexts.map((item, i) => (
                        <Typography key={`header-${i}`}>{item}</Typography>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="text-left">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6 px-10">
                            <CustomFormControl
                                isRequired
                                isInvalid={emailValidator.isError}
                            >
                                <CustomLabel>Email</CustomLabel>
                                <Input
                                    onChange={emailValidator.setInputValue}
                                    name="email"
                                />
                                {emailValidator.isEmpty ? (
                                    <CustomErrorMessage>
                                        Field cannot be empty
                                    </CustomErrorMessage>
                                ) : !emailValidator.isMatch ? (
                                    <CustomErrorMessage>
                                        This is not a valid email
                                    </CustomErrorMessage>
                                ) : (
                                    <></>
                                )}
                            </CustomFormControl>

                            <CustomFormControl>
                                <CustomLabel>Name</CustomLabel>
                                <Input name="name" />
                            </CustomFormControl>

                            <CustomFormControl>
                                <CustomLabel>Commission type</CustomLabel>
                                <Select
                                    name="comm-type"
                                    onChange={handleCommTypeOnChange}
                                >
                                    <option>Emotes</option>
                                    <option>Half Body</option>
                                    <option>Full Body</option>
                                    <option>Reference Sheet</option>
                                    <option>Plush Phone Wallpaper</option>
                                </Select>
                            </CustomFormControl>

                            <div className="flex flex-col gap-2">
                                <CustomCheckbox
                                    name="detailed-bg"
                                    isDisabled={
                                        commType !== "Half Body" &&
                                        commType !== "Full Body"
                                    }
                                    isChecked={detailedBG}
                                    onChange={() => setDetailedBG(!detailedBG)}
                                >
                                    Detailed background
                                </CustomCheckbox>

                                <CustomCheckbox
                                    name="additional-char"
                                    isDisabled={commType !== "Full Body"}
                                    isChecked={additionalChar}
                                    onChange={() =>
                                        setAdditionalChar(!additionalChar)
                                    }
                                >
                                    Additional character
                                </CustomCheckbox>
                            </div>

                            <CustomFormControl
                                isRequired
                                isInvalid={refSheetValidator.isEmpty}
                            >
                                <CustomLabel>Reference sheet links</CustomLabel>
                                <Textarea
                                    onChange={refSheetValidator.setInputValue}
                                    name="ref-links"
                                />
                                {refSheetValidator.isEmpty && (
                                    <CustomErrorMessage>
                                        Field cannot be empty
                                    </CustomErrorMessage>
                                )}
                            </CustomFormControl>

                            <CustomFormControl>
                                <CustomLabel>Secret commission?</CustomLabel>
                                <RadioGroup name="is-secret" defaultValue="No">
                                    <div className="flex gap-4">
                                        <CustomRadio value="Yes">
                                            Yes
                                        </CustomRadio>
                                        <CustomRadio value="No">No</CustomRadio>
                                    </div>
                                </RadioGroup>
                            </CustomFormControl>

                            <CustomFormControl>
                                <CustomLabel>
                                    Other means of contact
                                </CustomLabel>
                                <Textarea name="contacts" />
                            </CustomFormControl>

                            <CustomFormControl>
                                <CustomLabel>Extra information</CustomLabel>
                                <Textarea name="extra-info" />
                            </CustomFormControl>
                        </div>

                        <div className="flex flex-col items-center">
                            <Button
                                as={"button"}
                                type="submit"
                                disabled={
                                    emailValidator.isError ||
                                    refSheetValidator.isError
                                }
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}
