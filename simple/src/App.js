import Header from './component/Header';
import Bottom from './component/Bottom';
import Tag from './component/Tag';
import {useState} from 'react';
import './App.css';

function App() {
	let [searchKeyword, setSearchKeyword] = useState("");
	let [createBoard, setCreateBoard] = useState(null);
	let [showCreateBoard, setShowCreateBoard] = useState(false);
	let tagList = ['인생','취미','책','직업','날씨'];
	
	let testBoardList = [{title:'조던1 그레이',content:'330000',createDate:'2021-01-03'},
						 {title:'조던1 백보드',content:'120000',createDate:'2020-07-21'},
						 {title:'조던1 트레비스',content:'2500000',createDate:'2022-02-05'}]
	let [boardList, setBoardList] = useState(testBoardList);
	
	let [content, setContent] = useState('');

	
	// 함수 영역 ======================================================================
	// 현재 날짜 yyyy-mm-dd 형식으로 리턴
	let funcCurrentDate = function (){
		let date = new Date();
		let month = (date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1);
		
		return date.getFullYear() + '-' + month + '-' +date.getDate();
	}
	
	// 메모를 생성
	let funcshowCreateBoard = function (){
		
		let tempBoardList = [...boardList];
		tempBoardList.unshift(createBoard);
		
		if (createBoard != null && content.length > 0) {
			setBoardList(tempBoardList)
		}
		
		setContent('');
		setShowCreateBoard(false);
	}
	
	// 메모 생성을 위해 임시 저장
	let funcModifyBoard = function (e){
		let newBoard = {
			title : e.target.value.slice(0,10) + '...',
			content : e.target.value,
			createDate : funcCurrentDate()
		}
		setCreateBoard(newBoard);
		setContent(e.target.value);
	}
	
	
	return (
		<div className="App" onClick={funcshowCreateBoard}>

			<Header />

			<div className="container_body">


				<div className="container_body_nav">
					{tagList.map((tag,i)=>{return <Tag key={'tagkey_'+i} tag={tag} />})}
				</div>

				<div className="container_body_content">

					<div className="container_body_content_top">
						<div className={'create_board' + (showCreateBoard ? ' on' : '')} onClick={(e)=>{e.stopPropagation(); setShowCreateBoard(true)}} >
							<div className="create_board_content">
								<input type="text" onChange={funcModifyBoard} value={content} placeholder="메모 작성..."/>
							</div>
						</div>
					</div>

					<div className="container_board_list">
						{boardList.map((board, i)=>{
							return (
								<div className="container_board" key={'boardkey_'+i}>
									<div className="board_title">{board.title}</div>
								</div>
							)
							})}
					</div>

				</div>

			</div>

			<div className="dim"></div>
			
			<div className="modal_board">
				TEST
			</div>
			
			<Bottom />

		</div>
	);
}
  
export default App;
