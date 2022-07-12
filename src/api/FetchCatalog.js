import axios from "axios";

export const fetchCatalog = async (params) =>
    await axios.get("https://rickandmortyapi.com/api/character", {
        method: "GET",
        params,
    });
