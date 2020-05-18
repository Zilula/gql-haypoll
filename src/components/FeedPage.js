import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

export default class FeedPage extends Component {
  render() {
    return (
      <Query query={QUESTIONS_QUERY}>
        {({ data, loading, error, refetch }) => {
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
          return (
            <Fragment>
              <h1>Questions</h1>
              {data.getQuestions &&
                data.getQuestions.map(question => (
                  <Post
                    key={question.id}
                    question={question}
                    refresh={() => refetch()}
                    isDraft={!question.published}
                  />
                ))}
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const QUESTIONS_QUERY = gql`
  query QuestionsQuery {
    getQuestions {
      id
      options
      title
    }
  }
`
