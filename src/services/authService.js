import axios from "axios";

const BASEURL="https://book-e-sell-node-api.vercel.app/api/user";
class authService{
    Register = async(payload)=>{
       return await axios.post(`${BASEURL}`,payload);
    };
    Login = async(payload)=>{
        return await axios.post(`${BASEURL}/login`,payload);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new authService();