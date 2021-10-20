import http from "../http-common";

class UserDataService {
    getAllUsers() {
        return http.get("/getAllUsers");
    }

    getAllItems() {
        return http.get("/getAllItems")
    }
}