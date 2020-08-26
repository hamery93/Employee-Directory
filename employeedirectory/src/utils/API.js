import axios from "axios";

export default {
  get: function() {
    return axios.get("https://randomuser.me/api/?results=250&nat=us");
  }
};