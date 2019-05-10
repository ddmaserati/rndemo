import { Actions } from "react-native-router-flux";
import ToastShow from '../common/ToastProxy'

//网络错误
export const NETWORK_ERROR = 1;
//网络超时
export const NETWORK_TIMEOUT = 2;
//网络返回数据格式化一次
export const NETWORK_JSON_EXCEPTION = 3;


export const SUCCESS = 200;


/**
 *   自定义事件
 * @param {} code 
 * @param {*} statusText 
 */
export default function (code, statusText) {
    switch (code) {
        case 401:
            //授权逻辑
            if (Actions.currentScene !== 'LoginPage') {
                Actions.reset("LoginPage");
            }
            return "未授权或授权失败";//401 Unauthorized
        case 403:
            ToastShow('403权限错误')
            return "403权限错误";
        case 404:
            ToastShow('404错误')
            return "404错误";
        case 410:
            ToastShow('410错误')
            return "410错误";
        case NETWORK_TIMEOUT:
            //超时
            ToastShow('请求超时')
            return 'netTimeout';
        default:
            if (statusText) {
                ToastShow(statusText);
            } else {
                ToastShow('errorUnKnow');
            }
            return "其他异常"
    }

}