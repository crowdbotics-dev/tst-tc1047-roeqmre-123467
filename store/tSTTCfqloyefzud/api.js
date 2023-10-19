import axios from "axios"
import {
  TST_TC1047FQLOYEFZUD_PASSWORD,
  TST_TC1047FQLOYEFZUD_USERNAME
} from "react-native-dotenv"
const tSTTCfqloyefzud = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047FQLOYEFZUD_PASSWORD,
    password: TST_TC1047FQLOYEFZUD_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
