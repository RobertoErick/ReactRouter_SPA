import axios from "axios"

export const api = axios.create({
    baseURL: "https://fake-api-react-router-spa.vercel.app/"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
    console.log(respuesta)
}