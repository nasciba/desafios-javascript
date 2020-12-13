/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
    if (htmlTemplate === '') {
        return { height: 0, width: 0 };

    }
    else {
        const regExpHeight = /height: [0-9]+/
        const regExpWidth = /width: [0-9]+/
        const findHeight = htmlTemplate.match(regExpHeight)
        const findWidth = htmlTemplate.match(regExpWidth)
        let height = parseInt(findHeight[0].slice(findHeight[0].search(" ")));
        let width = parseInt(findWidth[0].slice(findWidth[0].search(" ")));
        let sizeExtracted = {
            height: height,
            width: width
        }
        return sizeExtracted
    }
}


module.exports = extractSize
