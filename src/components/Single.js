import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
    render() {
        const index = this.props.posts.findIndex(post => this.props.params.postId === post.code)
        const post  = this.props.posts[index]
        const comments = this.props.comments[post.code] || []

        return (
            <div className="single-photo">
                <Photo class={`col-sm-8`} i={index} post={post} {...this.props}/>
                <Comments singleComments={comments} {...this.props} />
            </div>
        )
    }
}

export default Single