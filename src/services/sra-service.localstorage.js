export default {

    get: (name) => {
        const item = JSON.parse(window.localStorage.getItem(name)) || [];
        return Promise.resolve(item);
    },

    save: (item, name) => {
        window.localStorage.setItem(name, JSON.stringify(item));
        return Promise.resolve('ok');
    }
};