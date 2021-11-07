function createAnalytics() {
    let counter = 0;
    let destroyed = false

    const listner = () => counter++

    document.addEventListener('click', listner)

    return {
        destroy() {
            document.removeEventListener('click', listner)
            destroyed = true
        },

        getClicks() {
            if (destroyed){
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics();