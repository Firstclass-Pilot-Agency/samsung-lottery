import axios from 'axios'
const url = 'http://localhost:8000/api'

export const getUsers = async () => {
    const users = await axios.get(url+"/users")
    return users.data
}
    

export const createUser =  async (name, phoneNumber, lotteryId) => {
    const data = {
        name: name,
        phoneNumber: phoneNumber,
        lotteryId: lotteryId,
    };
    const users = await axios.post(url + "/users/new", data);
    return users;
};

export const addWinner = async (id)=>{
    const data = {
        id: id
    }
    const winner = await axios.put(url + "/users/addwinner", data);
    return winner.data
}

export const checkLottery = async (data) => {
    const lot = await axios.post(url + "/users/checkLot", data);
    return lot;
};

export const DeleteUser = async (id) => {
    const data = {
        id: id,
    };
    const del = await axios.post(url + "/users/del", data);
    return del.data;
};