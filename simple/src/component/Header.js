function Header(){
	return (
		<div className="container_header">
			<button>hamburger</button>
			<button>home</button>
			
			<div id="container_searchKeyword">
				<input id="searchKeyword" onChange={(e)=>{ console.log(e.target.value) }} placeholder="검색"/>
			</div>
			
			<button>refresh</button>
			<button>set</button>
			<button>login</button>
		</div>
	);
}

export default Header;