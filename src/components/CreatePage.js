import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'

class CreatePage extends Component {
  state = {
    title: '',
    content: '',
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_QUESTION_MUTATION}
        update={(cache, { data }) => {
          const { drafts } = cache.readQuery({ query: DRAFTS_QUERY })
          cache.writeQuery({
            query: DRAFTS_QUERY,
            data: { drafts: drafts.concat([data.createDraft]) },
          })
        }}
      >
        {(createQuestion, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { title, one, two } = this.state
                  await createQuestion({
                    variables: { title, options: [one, two] },
                  })
                  this.props.history.replace('/drafts')
                }}
              >
                <h1>Create Draft</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ title: e.target.value })}
                  placeholder="Title"
                  type="text"
                  value={this.state.title}
                />
                        <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ one: e.target.value })}
                  placeholder="One"
                  type="text"
                  value={this.state.one}
                />

          <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ two: e.target.value })}
                  placeholder="Two"
                  type="text"
                  value={this.state.two}
                />


                <input
                  className={`pa3 bg-black-10 bn ${this.state.content &&
                    this.state.title &&
                    'dim pointer'}`}
                  disabled={!this.state.one || !this.state.title}
                  type="submit"
                  value="Create"
                />
                <a className="f6 pointer" onClick={this.props.history.goBack}>
                  or cancel
                </a>
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }

}

const CREATE_DRAFT_MUTATION = gql`
  mutation CreateDraftMutation($title: String!, $content: String!) {
    createDraft(title: $title, content: $content) {
      id
      title
      content
    }
  }
`

const CREATE_QUESTION_MUTATION = gql`
  mutation CreateQuestionMutation($title: String!, $options: [String!]!) {
    createQuestion(title: $title, options: $options) {
      id
      title
      options
    }
  }
`

export default withRouter(CreatePage)
