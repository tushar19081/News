import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description,imageUrl, newsUrl} = this.props
        return (
            <div className= 'container my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
} 

export default NewsItem
