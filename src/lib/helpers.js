let myGlobalId = 0;

export let createId = () => {
    let idStr = `${myGlobalId}`;
    myGlobalId += 1;
    return idStr;
}
