function woodHateoas(wood) {
    const id = wood.id;
    return [
        {
            rel: "self",
            method: "GET",
            href: `/api/woods/${id}`,
        },
        {
            rel: "edit",
            method: "PUT",
            href: `/api/woods/${id}`,
        },
        {
            rel: "delete",
            method: "DELETE",
            href: `/api/woods/delete/${id}`,
        },
        {
            rel: "sameHardness",
            method: "GET",
            href: `/api/woods/${wood.hardness}`,
        },
    ];
}
  
function woodCollectionHateoas() {
    return [
        {
            rel: "all",
            method: "GET",
            href: "/api/woods/",
        },
        {
            rel: "by hardness",
            method: "GET",
            href: "/api/woods/:hardness",
        },
        {
            rel: "create",
            method: "POST",
            href: "/api/woods/add",
        },
    ];
}
  
module.exports = {
    woodHateoas,
    woodCollectionHateoas
};