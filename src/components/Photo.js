import React from 'react'
import {Link} from 'react-router' 

class Photo extends React.Component {
    render() {
        const {post, i, comments} = this.props
        return (
            <figure className={`image-wrapper ${this.props.class}`}>
                <Link to={`/view/${post.code}`}>
                    <img className="individual-image" src={post.display_src} alt={post.caption}/>
                </Link>
                <figcaption>
                    <div className="image-text">
                        {post.caption}
                    </div>
                    <div className="image-btn">
                        <button onClick={() => this.props.increment(i)} className="btn btn-default">&hearts; {post.likes}</button>
                        <Link to={`/view/${post.code}`}>
                            <button className="btn btn-default">&hearts; {comments[post.code]? comments[post.code].length: 0}</button>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
        
    }
}

export default Photo