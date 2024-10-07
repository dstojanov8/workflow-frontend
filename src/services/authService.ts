export const checkAuth = async () => {
    const response = await fetch('http://127.0.0.1:8000/auth-check', {
        method: 'GET',
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Not authenticated');
    }

    const data = await response.json();
    return data;
};