function newVoteSubscription(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscription,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newVote,
}