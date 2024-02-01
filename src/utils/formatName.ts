const useFormatName = () => {
    const formatName = (name: string) => {
        if (name.length > 21) {
            return name.slice(0, 21) + '...'
        }
        return name
    }

    return formatName;
}

export default useFormatName;