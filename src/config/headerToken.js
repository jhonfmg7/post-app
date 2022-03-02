const { default: clientAxios } = require("./axiosClient")

const headerToken = (user) => {
    if (user) {
        clientAxios.defaults.headers.common['app-id'] = process.env.NEXT_PUBLIC_APP_ID
    } else {
        delete clientAxios.defaults.headers.common['app-id']
    }
}

export default headerToken;