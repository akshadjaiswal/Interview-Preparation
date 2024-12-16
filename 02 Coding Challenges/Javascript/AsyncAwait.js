async function fetchData() {
    const API = "https://api.github.com/users/akshadjaiswal"
    try {
        const response = await fetch(API)
        if (!response.ok) {
            throw new Error("Failed")
        } else {
            const data = await response.json()
            console.log(data)
        }
    } catch (err) {
        console.log(err)
    }
}
fetchData()