import http from "../http-common";

const getAll = ()=> {
    return http.get("/issues");
};

const get =(id) => {
    return http.get(`/issues/${id}`);
};

const create = (data) => {
    return  http.post("/issues", data);
};


const remove = (id) => {
    return http.delete(`/issues/${id}`);
};

export default{
    getAll,
    get,
    create,
    remove,
};

