import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {
	getUserByEmail(email) {
		return axios.get(USER_API_BASE_URL + "/email/" + email);
	}
}

export default new UserService();
