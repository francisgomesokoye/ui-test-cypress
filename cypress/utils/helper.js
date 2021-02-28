//this file will store helper methods to perform certain functionalities
//see some examples below

export const getArrayRandomelement = (arr) => {
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

export const randomGenerator = (number) => {
    return Math.floor(Math.random() * (number))
}
