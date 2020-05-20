import React, { Fragment } from 'react'
import { Query, Mutation, useSubscription } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import  { gql } from 'apollo-boost'

const DetailPage = (props) => {


  const { data, loading } = useSubscription(VOTE_SUBSCRIPTION);
    const option = (option) => {
    return (
      <>
       <Mutation
        mutation={VOTE_MUTATION}
      >
        {(createVote, { data, loading, error }) => {
          return (
            <a
              className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
              onClick={async () => {
                await createVote({
                  variables: { question: props.match.params.id, value: option  },
                })
              }}
            >
              {option}
            </a>
          )
        }}
      </Mutation>
      </>
    )
  }
              console.log('fuck', data)


    return (
      <>
        <Query query={QUESTION_QUERY} variables={{ id: props.match.params.id }}>
          {({ data, loading, error }) => {
            if (loading) {
              return (
                <div className="flex w-100 h-100 items-center justify-center pt7">
                  <div>Loading ...</div>
                </div>
              )
            }

            if (error) {
              return (
                <div className="flex w-100 h-100 items-center justify-center pt7">
                  <div>An unexpected error occured.</div>
                </div>
              )
            }

            const { question } = data
            return (
              <Fragment>
                <h1 className="f3 black-80 fw4 lh-solid">{data.question.title}</h1>
                <p className="black-80 fw3">{data.question.options.split('|').map(o => option(o))}</p>
              </Fragment>
            )
          }}
        </Query>
        {!loading && <h2>{data.newVote?.value || ''}</h2>}
      </>
    )
}

const QUESTION_QUERY = gql`
  query QuestionQuery($id: ID!) {
    question(id: $id) {
      id
      title
      options
    }
  }
`

const VOTE_MUTATION = gql`
  mutation CreateVote($question: String, $value: String) {
    createVote(question: $question, value: $value) {
      question
      value
    }
  }
`

const VOTE_SUBSCRIPTION = gql`
subscription {
  newVote {
    id
    value
  }
}
`

export default withRouter(DetailPage)
