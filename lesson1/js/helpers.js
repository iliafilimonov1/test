/**
 * @param {string} text
 */
export function getDescription(text) {
    if (text.length <= 10) {
        return "You cannot autorized"
    } else {
        return "You autorized"
    }
}