/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

const normalizeData = unormalized => {
    let normalizedReports = {}
    for (let i = 0; i < unormalized.reports.length; i += 1) {
        normalizedReports[unormalized.reports[i].id] = {
            id: unormalized.reports[i].id,
            user: unormalized.user.id,
            document: unormalized.reports[i].result.document,
            status: unormalized.reports[i].result.status,
        }
    }
    let reportIds = unormalized.reports.map(report => report.id)
    let normalizedData = {
        results: {
            [unormalized.id]: {
                id: unormalized.id,
                user: unormalized.user.id,
                reports: reportIds
            }
        },
        users: {
            [unormalized.user.id]: {
                id: unormalized.user.id,
                name: unormalized.user.name
            }
        },
        reports: normalizedReports
    }
    return normalizedData
}

module.exports = normalizeData

