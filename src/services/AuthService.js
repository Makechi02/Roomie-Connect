import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {
	authenticateUser(user) {
		return axios(AUTH_API_BASE_URL + "/authenticate", {
			method: "POST",
			data: user,
		});
	}

	registerUser(user) {
		return axios(AUTH_API_BASE_URL + "/register", {
			method: "POST",
			data: user,
			headers: { "Content-Type": "multipart/form-data" },
		});
	}
}

export default new AuthService();
