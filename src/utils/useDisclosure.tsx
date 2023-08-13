import { useState } from "react"

export function useDisclosure() {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return { isOpen, onClose, onOpen }
}
