const dom  = {
    inp: document.querySelector('#inp-info'),
    btn: document.querySelector('#btn-memo'),
};

/** Cookie
 * Static - метод самого класса а не их єкземпляра
 * Их можно вызывать у класса, а не у экземпляра.
 * Можно использовать если внутри этого метода вы не обращаетесь к this (контексту этого класса)
 */

dom.btn.addEventListener('click', ()=>{
    Cookie.set(Date.now(), dom.inp.value, 2);
    const arr = JSON.parse(localStorage.getItem('inputs')) || [];
    arr.push(dom.inp.value);
    localStorage.setItem('inputs', JSON.stringify(arr));
    dom.inp.value = '';
});

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     const expires = `expires=${d.toUTCString()}`;
//     document.cookie = `${cname}=${cvalue};${expires};path=/`;
// }
// function getCookie(cname) {
//     const name = cname + "=";
//     const ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         c.trim();
//         if (c.indexOf(name) == 0) {
//             return c.slice(name.length);
//         }
//     }
//     return "";
// }
// function deleteCookie(cname) {
//     document.cookie = `${cname}=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//     return true;
// }

class Cookie{
    static del(cname){
        document.cookie = `${cname}=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        return true;
    }
    static get(cname){
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            c.trim();
            if (c.indexOf(name) == 0) {
                return c.slice(name.length);
            }
        }
        return "";
    }
    static set(cname, cvalue, exdays){
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }
}

/**
 * LocalStorage
 * SessionStorage
 */
localStorage.setItem('name', 'Nick');
//IndexedDB