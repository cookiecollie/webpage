import { useState } from "react"

export function useValidation(validationType: "email" | "none") {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const everthingRegex = /.*/
    const regex = validationType === "email" ? emailRegex : everthingRegex

    const [input, setInput] = useState("")

    const setInputValue = (e: any) => {
        setInput(e.target.value)
    }

    const isEmpty = input === ""
    const isMatch = regex.test(input)
    const isError = isEmpty || !isMatch

    return { input, setInputValue, isEmpty, isMatch, isError }
}