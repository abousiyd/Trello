const token = {
    

    logout() {
        sessionStorage.clear()
        window.location.reload();
    }
}

export default token