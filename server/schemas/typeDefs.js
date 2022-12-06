const { gql } = require('apollo-server-express');

const typeDefs = gql`  
    type Tech {
        _id: ID
        name: String!
    }

    type Matchup {
        _id: ID
        tech1: String!
        tech2: String!
        tech1_votes: Int
        tech2_votes: Int
    }

    type Query {
        matchups: [Matchup]!
        matchup(matchID: ID!) : Matchup
        techs: [Tech]!
    }

    type Mutation {
        creteMatchup(tech1: String!, tech2: String!): Matchup
        createVote(_id: String!, techNum: Int!): Matchup
    }

`

module.exports = typeDefs;