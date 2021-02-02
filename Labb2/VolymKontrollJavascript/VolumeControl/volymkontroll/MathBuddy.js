export function isWholeNumber(x) {
    return typeof (x) === "number" && x % 1 === 0
}

export function stringIsWholeNumber(x) {
    return typeof (x) === "string" && x % 1 === 0
}