function setAnalyticId () {
    const payload = {
        google_analytics_client_id: getGaClientId(),
        yandex_metrika_client_id: getYmClientId(),
    };

    const endpoint = "/api/v1/user/set-analytics";

    const { data: result } = window.axios.post(endpoint, payload);
}

function getYmClientId () {
    const counterId = getCounterId();

    return counterId;
}

function getCounterId () {
    let clientId = null;
    ym(62822413, 'getClientID', (clientID) => {
        clientId = clientID;
    });
    return clientId;
}

function getGaClientId () {
    return window.ga?.getAll()[0].get('clientId');
}

window.addEventListener('DOMContentLoaded', async () => {
    setTimeout(() => {
        setAnalyticId();
    }, 1500);
});
