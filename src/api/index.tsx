import axios from "axios"

const _raw_API_URL: string = import.meta.env.VITE_API_URL
const API_URL = _raw_API_URL.replace(/["]+/g, "")

export async function testAPI() {
    return await axios.get(`${API_URL}`).then((res) => console.log(res))
}

export async function sendRequestForm(
    form: any,
    CAPTHCHAToken: string,
    setStatus?: (status: string) => void
) {
    return await axios
        .post(`${API_URL}/api/request`, {
            form: form,
            CAPTHCHAToken: CAPTHCHAToken,
        })
        .then(() => {
            setStatus?.("OK")
        })
        .catch(() => {
            setStatus?.("Error")
        })
}
