

const config = {
    url: 'https://nomoreparties.co/v1/plus-cohort-13',
    headers: {
        'Content-type': 'application/json',
        'Authorization': '844c6925-c178-4069-b4da-5f9c32ab1246'
    }
};

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
};


export const getAllCards = () => {
    return fetch (`${config.url}/cards`, {
        method: 'GET',
        headers: config.headers
    })

    .then(onResponce)
}; 

export const postCard = (data) => {
    return fetch (`${config.url}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(data)
    })

    .then(onResponce)
};

export const userInfo = () => {
    return fetch (`${config.url}/users/me`, {
        headers: config.headers
    })

    .then(onResponce)
};

export const editProfile = (data) => {
    return fetch (`${config.url}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(data)
    })

    .then (onResponce)
};

export const getUserAvatar = (data) => {
    return fetch (`${config.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(data)
    })

    .then (onResponce)
};

export const deletingCard = (cardId) => {
    fetch (`${config.url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    })

    .then(onResponce)
}

export const getAllInfo = () => {
    return Promise.all([userInfo(), getAllCards()])
};

export const changeLikeStatus = (cardId, isLiked) => {
    return fetch (`${config.url}/cards/likes/${cardId}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: config.headers
    })

    .then(onResponce)
}


