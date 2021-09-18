import Axios from "axios"

export const fetchRSSFeed = async () => {
    const {data} = await Axios.get('https://v1.nocodeapi.com/kumar_gandharv_singh/medium/llxMEGEVcueXFRJt') || {}
    return data;
}