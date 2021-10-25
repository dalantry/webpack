function createAnalytics() {
    let counter = 0;
    let isDestroyed = false

    const listner = () => counter++

    document.addEventListener('click', listner)

    return {
        destroy() {
            document.removeEventListener('click', listner)
            isDestroyed = true
        },

        getClicks() {
            if (isDestroyed){
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics();