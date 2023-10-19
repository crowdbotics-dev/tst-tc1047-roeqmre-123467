import axios from "axios"
import {
  TST_TC1047UXXIHOZRSR_USERNAME,
  TST_TC1047UXXIHOZRSR_PASSWORD
} from "react-native-dotenv"
const tSTTCuxxihozrsr = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047UXXIHOZRSR_USERNAME,
    password: TST_TC1047UXXIHOZRSR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
