import axios from "axios"
import {
  TST_TC1047ICETEBJCQX_USERNAME,
  TST_TC1047ICETEBJCQX_PASSWORD
} from "react-native-dotenv"
const tSTTCicetebjcqx = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ICETEBJCQX_USERNAME,
    password: TST_TC1047ICETEBJCQX_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
