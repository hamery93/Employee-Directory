import axios from "axios";

const URLRANDOM = "https://randomuser.me/api/?results=20&nat=us";



export default {
  search: function() {
    return axios.get(URLRANDOM);
  }
};
