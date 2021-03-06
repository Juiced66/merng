const postResolvers = require('./post')
const usersResolvers = require('./users')


module.exports = {
    Query : {
        ...postResolvers.Query //spread operator
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}
