import React from 'react'

class Comments extends React.Component {
    state = {
        user: '',
        comment: ''
    }

    renderComments(item, index){
        return (
            <div className="comment" key={index}>
                <span className="comment-user">{item.user}</span>
                <span className="comment-text">{item.text}</span>
                <span className="remove-comment" onClick={() => this.props.removeComment(this.props.params.postId, index)}>&times;</span>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addComment(this.props.params.postId, this.state.user, this.state.comment)
    }

    handleChange(e) {
        switch(e.target.name) {
            case 'user':
                this.setState({...this.state, user: e.target.value})
                break

            case 'comment':
                this.setState({...this.state, comment: e.target.value})
                break

            default:
                break
        }
    }

    render() {
        return (
            <div className="col-sm-4">
                {/*{this.props.singleComments.map(this.renderComments)}*/}
                {this.props.singleComments.map((item, index) => this.renderComments(item, index))}
                <form onChange={e => this.handleChange(e)} onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" className="form-control" name="user" placeholder="user"/>
                    <input type="text" className="form-control" name="comment" placeholder="comments"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}

export default Comments