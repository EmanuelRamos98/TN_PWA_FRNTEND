const getAuthenticatedHeaders = () => {
    const access_token = sessionStorage.getItem('access_token')
    return {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
    }
}

export { getAuthenticatedHeaders }