import HomeComponent from './../../containers/home'
import Head from "next/head";
import React, {Component} from "react";
import {inHomeComponentProps} from "../../containers/home/inHomeComponentProps";
interface Props {
    posts?:any;
    users?:any;
}
class Home extends Component<Props>{
    constructor(props:Props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Head>
                    <title>Read Sokcial</title>
                </Head>
                <HomeComponent posts={this.props.posts} users={this.props.users} />
            </div>
        )
    }
}
export default Home;
