import HomeComponent from './../../containers/home'
import Head from "next/head";
import React, {Component} from "react";
interface props {
    posts?: any;
}
class Home extends Component<props>{
    static async getInitialProps() {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        //  const posts = await postsResponse.json();
        const posts ={id:1};
        return {
            posts
        }
    }
    render() {
        const { posts } = this.props;
        console.log(this.props);
        return (
            <div>
                <Head>
                    <title>Read Social</title>
        </Head>
        {/*<HomeComponent posts={posts} />*/}
        </div>
    )
    }
}
export default Home;
