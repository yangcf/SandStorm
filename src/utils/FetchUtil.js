/**
 * Created by 杨超凡 on 2018/4/18.
 * 网络请求封装
 */
let NetUtil = {
    postJson(url, data, callback,errorhandle,finnaly){
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body:data
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                //  callback(JSON.parse(responseText));
                callback(responseText);
            })
            .catch(error=>{
                errorhandle(error);
            })
            .done(finnaly());
    },
    //multipart
    postmultJson(url, data, callback,errorhandle,finnaly){
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json;charset=UTF-8',
                'Content-Type': 'multipart/form-data;'
            },
            body:data
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                 callback(JSON.parse(responseText));
                // callback(responseText);
            })
            .catch(error=>{
                errorhandle(error);
            }).done(finnaly());
    },
};
export default NetUtil;