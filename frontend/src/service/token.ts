const setToken = (webToken: string) => {
    localStorage.setItem("webToken", webToken);
}

const getToken = ():string | null => {
    return localStorage.getItem("webToken");
}

export {
    getToken,
    setToken
}