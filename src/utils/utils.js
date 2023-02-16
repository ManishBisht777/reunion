export const filterData = (query, properties) => {
    console.log(query);
    const filteredData = properties.filter((property) => {
        if (
            query.name &&
            !property.name.toLowerCase().includes(query.name.toLowerCase())
        )
            return false;
        if (
            query.location &&
            !property.location.toLowerCase().includes(query.location.toLowerCase())
        )
            return false;
        if (query.type && !(property.type.toLowerCase() === query.type))
            return false;
        if (
            query.date &&
            !(Date.parse(property.availableOn) <= Date.parse(query.date))
        )
            return false;
        if (query.price && !(property.price <= query.price)) return false;

        return true;
    });

    return filteredData;
};
