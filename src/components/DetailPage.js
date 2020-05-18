import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import  { gql } from 'apollo-boost'
import { QUESTIONS_QUERY } from './FeedPage'

class DetailPage extends Component {
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
              <p className="black-80 fw3">{data.question.options}</p>
              {action}
            </Fragment>
          )
        }}
      </Query>
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

const PUBLISH_MUTATION = gql`
  mutation PublishMutation($id: ID!) {
    publish(id: $id) {
      id
      published
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
