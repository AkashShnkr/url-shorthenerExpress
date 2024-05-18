const sessionIdtoUSermap = new Map();

function setUser(id,user){
    sessionIdtoUSermap.set(id,user);
}
function getUser(id){
    return sessionIdtoUSermap.get(id);
}
module.exports = {
    setUser,
    getUser,
};