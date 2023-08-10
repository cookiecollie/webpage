export interface NavObjects {
    name?: string
    itemKey?: string
    page?: React.ReactNode
}

interface PriceCardObj {
    title: string
    description: string[]
    price: string
    exampleLink: string
}
export interface StaticTextObject {
    Home: {
        heading: string
        content: string[]
    }
    Commission: {
        headerTexts: string[]
        emotes: PriceCardObj
        halfBody: PriceCardObj
        fullBody: PriceCardObj
        refSheet: PriceCardObj
        plushPhoneBG: PriceCardObj
        extras: {
            Background: string[]
            Others: string[]
        }
    }
    TOS: {
        tos: string[]
        importants: string[]
        commDetails: {
            details: string[]
            paymentProcess: string[]
            willDraw: string[]
            willNotDraw: string[]
        }
    }
    RequestForm: {
        headerTexts: string[]
        formGuide: {
            field: string
            content: string
        }[]
    }
    ImgLinks: {
        emotes: string[]
        halfBody: string[]
        fullBody: string[]
        refSheet: string[]
        plushPhoneBG: string[]
    }
}
