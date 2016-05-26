import React      from 'react'
import ReactDOM   from 'react-dom'
import CommentBox from './components/CommentBox.jsx'
import FeedTitle  from './components/FeedTitle.jsx'

//class CommentBox extends React.Component {
//	//ES6のクラスベースでReactコンポーネントを作るときはこのメソッドでコンポーネントを初期化します。明示的にコンストラクタを定義しない場合はスーパークラスのコンストラクタが呼ばれるため、中身がsuper(props)だけのときは省略することもできます。
//	constructor(props) {
//		super(props);
//	}
//	render() {
//		return(
//			<div className='commentBox'>
//				Hello, world! I am a CommentBox.
//			</div>
//		);
//	}
//}

//ReactDOM.render(
//	<CommentBox />,
//	document.getElementById('container')
//);

ReactDOM.render (
	<FeedTitle url="http://query.yahooapis.com/v1/public/yql?callback=?"  target="http://qiita.com/tags/javascript/feed" />,
	document.getElementById('container')
);











