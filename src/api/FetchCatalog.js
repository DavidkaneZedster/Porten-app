import axios from "axios";

export const fetchCatalog = (params) =>
    axios.get("https://rickandmortyapi.com/api/character", {
        method: "GET",
        params,
    });
