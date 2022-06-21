export function setback(name, val) {
    let back_store_list = localStorage.getItem('acat-todo-back');
    let back_store_obj = {};
    try {
        if(back_store_list){
            back_store_obj = JSON.parse(back_store_list);
        }
    } catch (error) {
        console.warn(error);
    }
    back_store_obj[name] = val;
    let update_back_list = back_store_list;
    try {
        update_back_list = JSON.stringify(back_store_obj);
    } catch (error) {
        console.warn(error);
    }
    localStorage.setItem('acat-todo-back', update_back_list);
    return update_back_list !== back_store_list;
}

export function getBack(name) {
    let back_store_list = localStorage.getItem('acat-todo-back');
  
    if (back_store_list === null || back_store_list === ''){
        return;
    }
    let res_back = '';
    try {
        let back_store_obj = JSON.parse(back_store_list);
        res_back = back_store_obj[name];
    } catch (error) {
        console.warn(error);
    }
    return res_back;
}