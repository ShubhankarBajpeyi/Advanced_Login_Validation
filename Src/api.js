function getUSers() {
    return JSON.parse(localStorage.getItem('userDB'));
}

export default getUSers;