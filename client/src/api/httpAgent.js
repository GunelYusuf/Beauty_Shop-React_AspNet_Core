import  axios,{AxiosError,AxiosResponse} from "axios";
import Cookies from 'universal-cookie';
import {store} from "../store/ConfigureStore";


const cookies = new Cookies();
const sleep = () => new Promise(resolve => setTimeout(resolve, 500));
axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;
const responseBody = (response) => response.data;


axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})



const  requests ={
    get:(url)=>axios.get(url).then(responseBody),
    post:(url,body)=>axios.post(url,body).then(responseBody),
    put:(url,body)=>axios.put(url,body).then(responseBody),
    delete:(url)=>axios.delete(url).then(responseBody),
    postForm: (url,data) => axios.post(url, data, {
    headers: {'Content-type': 'multipart/form-data'}
}).then(responseBody),
    putForm: (url,data) => axios.put(url, data, {
    headers: {'Content-type': 'multipart/form-data'}
}).then(responseBody)
}

function createFormData(item) {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData;
}


const Product = {
    getProductById:(id)=>requests.get(`product/${id}`),
    getAllProduct:()=>requests.get("product"),
    getAllTags:()=>requests.get("product/getAllTags"),
    getAllColors:()=>requests.get("product/getAllColors"),
    getAllCampaigns:()=>requests.get("product/getAllCampaigns")
}

const Blog = {
    getBlogById:(id)=>requests.get(`blog/${id}`),
    getAllBlog:()=>requests.get("blog"),
    getAllTags:()=>requests.get("blog/getAllTags"),

}


const Category = {
    getAllCategory:()=> requests.get("category")
}

const Basket = {
    getBaskets:()=>requests.get("basket"),
    addToBasket:(productId,quantity=1)=>requests.post(`basket?productId=${productId}&quantity=${quantity}`,{}),
    removeToBasket:(productId,quantity=1)=>requests.delete(`basket?productId=${productId}&quantity=${quantity}`)
}

const Account = {
    login:(data)=>requests.post("user/login",data),
    register:(data) =>requests.post("user/register",data),
    currentUser:()=>requests.get("account/profile"),
    fetchAddress:()=> requests.get('User/GetSavedAddress'),

}
const Order = {
    list: () => requests.get('order'),
    ById:(id) => requests.get(`orders/${id}`),
    create:(values) => requests.post('order',values),
}


const httpAgent = {
    Product,
    Category,
    Basket,
    Account,
    Blog,
    Order
}

export default httpAgent