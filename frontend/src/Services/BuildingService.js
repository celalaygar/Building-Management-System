import ApiService from "./BaseService/ApiService";

const USER_URL  = '/building'
class BuildingService {

    getUsers(page, size){ 
        let url = '/users?page='+page+'&size='+size;
        return ApiService.get(USER_URL+url);
    }

    get(url) { 
        return ApiService.get(url)
    }
    getUserByUsername(username){
        return ApiService.get(USER_URL+'/'+username)
    }
    post(username, data) { 
        return ApiService.post(USER_URL+"/"+username,data)
    }
    update(username,body) { 
        return ApiService.put(USER_URL+"/"+username,body)
    }
    loadImage(username,body) { 
        return ApiService.put(USER_URL+"/upload-image/"+username,body)
    }
    //put(url, data) { return axios.put(API_BASE_URL + url, data); }

    //delete(url) { return axios.delete(API_BASE_URL + url); }
}

export default new BuildingService();