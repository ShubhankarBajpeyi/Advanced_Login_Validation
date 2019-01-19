function getUSer() {
    return JSON.parse(localStorage.getItem('userDB'));
}

export default getUSer;