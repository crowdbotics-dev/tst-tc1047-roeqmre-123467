import axios from "axios"
import {
  TST_TC1047GOCZKYLDQD_PASSWORD,
  TST_TC1047GOCZKYLDQD_USERNAME
} from "react-native-dotenv"
const tSTTCgoczkyldqd = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047GOCZKYLDQD_PASSWORD,
    password: TST_TC1047GOCZKYLDQD_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
