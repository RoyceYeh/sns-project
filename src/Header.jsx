import React from "react";
import { Menu, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Menu>
			<Menu.Item as={Link} to='/'>
				Social
			</Menu.Item>
			<Menu.Item>
				<Search />
			</Menu.Item>
			<Menu.Menu position='right'>
				<Menu.Item as={Link} to='/signin'>
					登入/註冊
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default Header;
