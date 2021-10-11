import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export class News extends Component {

    constructor(){
        super();
        this.state = {
             articles : [],
             loading : false,
             page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1cdeaa4879247dc8dd91be7abe080db&pageSize=${this.props.pgsize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults
        });
    }

    handlePrev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1cdeaa4879247dc8dd91be7abe080db&page=${this.state.page-1}&pageSize=${this.props.pgsize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
           page: this.state.page - 1,
           articles: parsedData.articles
        })
    } 
    handleNext = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pgsize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1cdeaa4879247dc8dd91be7abe080db&page=${this.state.page+1}&pageSize=${this.props.pgsize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
           page: this.state.page + 1,
           articles: parsedData.articles
        })
    }

    } 

    render() {
        return (
            <div className="container my-4">
                <Spinner/>
                <h2 className="text-center">Top Headlines</h2>
                <div className="row">
                   {this.state.articles.map((element) => {
                    return <div className="col md-4" key={element.url}>
                    <NewsItem  title={element.title} description= {element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                   })}                    
                </div>                
                <div className = "container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" onClick={this.handlePrev} className="btn btn-outline-dark">&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pgsize)} type="button" className="btn btn-outline-dark nxt" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
