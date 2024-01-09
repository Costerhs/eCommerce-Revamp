
export const changeObjToForm = (obj) => {
    let formData = new FormData()
    Object.entries(obj).map(el => {
        formData.append(el[0], el[1])
    })
    return formData
}

export const setLocal = (name, value) => {
    localStorage.setItem(name, value)
}

export const getFilled = (obj) => {
    Object.entries(obj).map(el => {
        if (!el[1]) delete obj[el[0]]
    })
    return obj
}

export function removeLokPropertyWithId(arr, id) {
    return arr.map(el => {
        if (el.id === id) {
            const { deleteId, ...rest } = el;
            return rest;
        }
        return el;
    });
}
