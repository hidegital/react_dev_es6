// React をロード
import React from 'react';
import ReactDOM from 'react-dom';


//class
//class CommentBox extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//
//    render() {
//        return(
//            <div className='commentBox'>
//                Hello, world! I am a CommentBox.
//            </div>
//        );
//    }
//}



var UserBox = React.createClass({
    getInitialState:function(){
        return {userData:[]};
    },
    handleAddUser:function(name, mail){
        var data = this.state.userData;
        data.push({name: name, mail: mail});
        this.setState({userData: data});
    },
    render:function(){
        return(
            <div style={{width:"300px"}}>
                <UserForm addUser={this.handleAddUser}/>
                <hr/>
                <UserList userData={this.state.userData}/>
            </div>
        );
    }
});


//リストそのものを表示するコンポーネントを定義
var UserList = React.createClass({
    propTypes:{
        userData:React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },
    render:function(){
        var UserNodes = this.props.userData.map(function(user, index){
            return (
                <User name={user.name} mail={user.mail} key={index}/>
            );
        });
        return (
            <table>
                <tbody>
                <tr>
                    <th>名前</th>
                    <th>メールアドレス</th>
                </tr>
                {UserNodes}
                </tbody>
            </table>
        );
    }
});

var User = React.createClass({
    propTypes:{
        name: React.PropTypes.string.isRequired,
        mail: React.PropTypes.string
    },
    render:function(){
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.mail}</td>
            </tr>
        );
    }
});

//ユーザーの入力フォームを定義
var UserForm = React.createClass({
    propTypes:{
        addUser:React.PropTypes.func.isRequired
    },
    handleSubmit:function(){
        var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        var mail = ReactDOM.findDOMNode(this.refs.mail).value.trim();
        if (!name){
            return;
        }
        this.props.addUser(name, mail);
        ReactDOM.findDOMNode(this.refs.name).value = "";
        ReactDOM.findDOMNode(this.refs.mail).value = "";
    },
    render:function(){
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label>名前</label>
                        </td>
                        <td>
                            <input type="text" ref="name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>メールアドレス</label>
                        </td>
                        <td>
                            <input type="text" ref="mail"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={{textAlign:"right"}}>
                    <button onClick={this.handleSubmit}>追加</button>
                </div>
            </div>
        );
    }
});

//レンダリング
//React.render(
//    <ArticleList />,
//    document.getElementById('article-list')
//)

/*class構文*/
//class UserBox extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//    getInitialState(){
//        return {userData:[]};
//    }
//    handleAddUser(name, mail){
//        var data = this.state.userData;
//        data.push({name: name, mail: mail});
//        this.setState({userData: data});
//    }
//    render(){
//        return(
//            <div style={{width:"300px"}}>
//                <UserForm addUser={this.handleAddUser}/>
//                <hr/>
//                <UserList userData={this.state.userData}/>
//            </div>
//        );
//    }
//}


ReactDOM.render(
    <UserBox />,
    document.getElementById('container')
);







