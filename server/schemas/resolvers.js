const { Matchup, Tech } = require('../models');

const resolver = {
    Query: {
        techs: async () => {
            return Tech.find();
        },
        matchups: async () => {
            return Matchup.find();
        },
        matchup: async () => {
            return Matchup.findOne({ _id: matchID });
        },
    },

    Mutation: {
        createMatchup: async (parent, { tech1, tech2 }) => {
            const newMatch = await Matchup.create({ tech1, tech2 });
            return (newMatch);
        },
        createVote: async (parent, { _id, techNum }) => {
            const updateVote = await Matchup.findOneAndUpdate(
                { _id },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            )
            return (updateVote);
        }
    },
};

module.exports = resolver;