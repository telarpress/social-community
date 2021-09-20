import HomePage from './home'
import React, { Component } from 'react';
import  {createfetchPostRequest} from "../api/postApi";
import  {createUserSearchRequest} from "../api/userApi";
interface Props {
    posts?:any;
    users?:any;
}
class Home extends Component<Props>{
    static async getInitialProps(ctx:any) {
        const posts = await createfetchPostRequest();
        const users = await createUserSearchRequest();
        return {
                posts,
                users
        }
    }
    render() {
        // @ts-ignore
        const { posts,users } = this.props;
        console.log(users);
        // @ts-ignore
        return (
            <div>
                <HomePage posts={posts}  users={users}  />
            </div>

        )
    }
}
export default Home;
