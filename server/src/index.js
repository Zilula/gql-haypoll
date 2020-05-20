const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Subscription = require('./resolvers/Subscription')


const resolvers = {
  Query: {
    feed: (parent, args, context) => {
      return context.prisma.posts({ where: { published: true } })
    },
    drafts: (parent, args, context) => {
      return context.prisma.posts({ where: { published: false } })
    },
    getQuestions: (parent, args, context) => {
      return context.prisma.questions()
    },
    question: (parent, {id}, context) => {
      return context.prisma.question({id})
    },
    getQVotes: (parent, { id }, context) => {
      return context.prisma.votes({where: {question: id}})
    },
    getAllVotes: (parent, args, context) => {
      return context.prisma.votes()
    }
  },
  Mutation: {
    createDraft(parent, { title, content }, context) {
      return context.prisma.createPost({
        title,
        content,
      })
    },
    createQuestion(parent, {title, options}, context) {
      return context.prisma.createQuestion({
        title,
        options
      })
    },
    createVote(parent, { question, value }, context) {
      return context.prisma.createVote({
        question,
        value   
      })
    },
    deletePost(parent, { id }, context) {
      return context.prisma.deletePost({ id })
    },
    publish(parent, { id }, context) {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true },
      })
    },
  },
  Subscription
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
