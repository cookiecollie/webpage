import { motion } from "framer-motion"
import React, { useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import {
    blockSimpleFade,
    flexFadeInVariants,
} from "../../../utils/animVariants"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
}

export const Modal = (props: React.PropsWithChildren<ModalProps>) => {
    const { isOpen, onClose, children } = props
    useEffect(() => {
        isOpen
            ? document.body.classList.add("modal-open")
            : document.body.classList.remove("modal-open")
    }, [isOpen])

    return (
        <>
            <motion.div
                className="fixed left-0 top-0 z-[999] h-full w-full bg-neutral-alias-fill-quaternary/25 "
                onClick={onClose}
                animate={isOpen ? "finish" : "initial"}
                variants={blockSimpleFade}
                initial={{ opacity: 0 }}
            />

            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[999] h-[100dvh] w-[100vw] items-start justify-center overflow-hidden overscroll-y-none"
                animate={isOpen ? "finish" : "initial"}
                variants={flexFadeInVariants}
                initial={{ opacity: 0 }}
            >
                <section className="pointer-events-auto relative z-[999] my-auto flex w-[28rem] flex-col rounded-lg bg-neutral-alias-bg-container text-left">
                    <button
                        className="absolute right-3 top-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base transition-colors duration-300 hover:bg-neutral-alias-fill-secondary"
                        onClick={onClose}
                    >
                        <AiOutlineClose />
                    </button>
                    {React.Children.map(
                        children,
                        (child: React.ReactNode) => child
                    )}
                </section>
            </motion.div>
        </>
    )
}

const Header = ({ children }: React.PropsWithChildren) => {
    return <header className="flex-[0 1 0%] px-6 py-4">{children}</header>
}
Modal.Header = Header

const Body = ({ children }: React.PropsWithChildren) => {
    return <div className="flex-1 px-6 py-2">{children}</div>
}
Modal.Body = Body

const Footer = ({ children }: React.PropsWithChildren) => {
    return (
        <footer className="flex items-center justify-end px-6 py-4 ">
            {children}
        </footer>
    )
}
Modal.Footer = Footer
