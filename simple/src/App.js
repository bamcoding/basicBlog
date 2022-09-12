import Header from './component/Header';
import Bottom from './component/Bottom';
import Tag from './component/Tag';
import Board from './component/Board';
import {useState} from 'react';
import './App.css';

function App() {
	let [searchKeyword, setSearchKeyword] = useState("");
	let [createBoard, setCreateBoard] = useState(false);
	let tagList = ['인생','취미','책','직업','날씨'];
	
	let testBoardList = [{title:'조던1 그레이',content:'330000',createDate:'2021-01-03'},
						 {title:'조던1 백보드',content:'120000',createDate:'2020-07-21'},
						 {title:'조던1 트레비스',content:'2500000',createDate:'2022-02-05'}]
	let [boardList, setBoardList] = useState(testBoardList);
	let [board, setBoard] = useState(null);
	let [content, setContent] = useState('');
		
	let currentDate = function (){
		let date = new Date();
		let month = (date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1);
		
		return date.getFullYear() + '-' + month + '-' +date.getDate();
	}
	
	
	
	return (
	<div className="App" onClick={()=>{
				setCreateBoard(false);
				
				let tempBoardList = [...boardList];
				tempBoardList.unshift(board);
				(board != null && content.length > 0) ? setBoardList(tempBoardList) : null;
				setContent('');
			}}>
		
		<Header />
			
		<div className="container_body">
		
			
			<div className="container_body_nav">
				{tagList.map((tag,i)=>{return <Tag key={'tagkey_'+i} tag={tag} />})}
			</div>

			<div className="container_body_content">
				
				<div className="container_body_content_top">
					<div className={'create_board' + (createBoard ? ' on' : '')} onClick={(e)=>{e.stopPropagation(); setCreateBoard(true)}} >
						{createBoard ? 
						<div className="create_board_title">
							<input type="text" placeholder="제목"/>
						</div> 
						: null}
						<div className="create_board_content">
							<input type="text" onChange={(e)=>{
									
									let newBoard = {
										title : e.target.value.slice(0,5) + '...',
										content : e.target.value,
										createDate : currentDate()
									}
									
									setBoard(newBoard);
									setContent(e.target.value);
									
									}} 
								value={content}
								placeholder="메모 작성..."/>
						</div>
					</div>
				</div>
				
				<div className="container_board_list">
					{boardList.map((board, i)=>{return <Board key={'boardkey_'+i} board={board}/>})}
				</div>
				
			</div>
			
		</div>
		
		<Bottom />
			
	</div>
	);
}
  
export default App;
