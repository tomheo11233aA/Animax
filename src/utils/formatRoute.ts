// const formatRoute = route.params.type.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())

export const formatRoute = (route: string) => {
    return route.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
}