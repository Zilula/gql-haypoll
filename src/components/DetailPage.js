import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import  { gql } from 'apollo-boost'

class DetailPage extends Component {
    option = (option) => {
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

                console.log('fuckl', option)
                await createVote({
                  variables: { question: this.props.match.params.id, value: option  },
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

  _renderAction = ({ id }) => {
    const deleteMutation = (
      <Mutation
        mutation={DELETE_MUTATION}
      >
        {(deletePost, { data, loading, error }) => {
          return (
            <a
              className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
              onClick={async () => {
                await deletePost({
                  variables: { id },
                })
                this.props.history.replace('/')
              }}
            >
              Delete
            </a>
          )
        }}
      </Mutation>
    )
      return (
        <Fragment>
          {deleteMutation}
        </Fragment>
      )
  }

  render() {
    return (
      <Query query={QUESTION_QUERY} variables={{ id: this.props.match.params.id }}>
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
          const action = this._renderAction(question)
          return (
            <Fragment>
              <h1 className="f3 black-80 fw4 lh-solid">{data.question.title}</h1>
              <p className="black-80 fw3">{data.question.options.split('|').map(o => this.option(o))}</p>
              {action}
            </Fragment>
          )
        }}
      </Query>
    )
  }
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

const DELETE_MUTATION = gql`
  mutation DeleteMutatoin($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

export default withRouter(DetailPage)
