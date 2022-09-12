function Board (prop){	
	return (
		<div className="container_board" key={prop.key}>
			<div className="board_title">{prop.board.title}</div>
			<div className="board_content">{prop.board.content}</div>
			<div className="board_create_date">{prop.board.createDate}</div>
		</div>
	);
}

export default Board;