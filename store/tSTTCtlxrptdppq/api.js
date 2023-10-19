import axios from "axios"
import {
  TST_TC1047TLXRPTDPPQ_USERNAME,
  TST_TC1047TLXRPTDPPQ_PASSWORD
} from "react-native-dotenv"
const tSTTCtlxrptdppq = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047TLXRPTDPPQ_USERNAME,
    password: TST_TC1047TLXRPTDPPQ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
