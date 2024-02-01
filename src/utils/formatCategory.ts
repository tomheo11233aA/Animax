const useFormatCategory = () => {
    const formatCategory = (category: string) => {
        if (category.length > 30) {
            return category.slice(0, 30) + '...'
        }
        return category
    }

    return formatCategory;
}

export default useFormatCategory;