import cn from "classnames";
import type { FC } from "react";

import { Avatar } from "../../components/ui/Avatar/Avatar";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";

import styles from "./Header.module.css";
import type { HeaderProps } from "./Header.props";
import {
	ArrowBottomIcon,
	BellIcon,
	LogoIcon,
	MenuIcon,
	MessageIcon,
	PlusIcon,
	UserIcon,
} from "./icons/index";

export const Header: FC<HeaderProps> = ({
	className,
	...props
}): JSX.Element => {
	const isAuth = false;

	return (
		<header className={cn(styles.header, className)} {...props}>
			<div className={styles.headerLeft}>
				<div className={styles.menu}>
					<MenuIcon />
				</div>
				<div className={styles.logo}>
					<LogoIcon />
				</div>
			</div>
			<div className={styles.searchAndCreate}>
				<div className={styles.headerSearch}>
					<Input placeholder="Поиск" />
				</div>
				<div className={styles.headerCreate}>
					<Button bg="white" className={styles.buttonCreate}>
						<PlusIcon /> Создать
					</Button>
				</div>
			</div>
			<div className={styles.headerRight}>
				<BellIcon />
				{isAuth ? (
					<div className={styles.authUser}>
						<MessageIcon />
						<div className={styles.avatar}>
							<Avatar url="" /> <ArrowBottomIcon />
						</div>
					</div>
				) : (
					<Button className={styles.buttonLogin} bg="ghost">
						<UserIcon /> <span>Войти</span>
					</Button>
				)}
			</div>
		</header>
	);
};
