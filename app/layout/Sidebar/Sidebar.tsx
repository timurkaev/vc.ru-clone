import cn from "classnames";
import type { FC } from "react";
import { useState } from "react";

import styles from "./Sidebar.module.css";
import type { SidebarProps } from "./Sidebar.props";

const pages = [
	{ id: 1, name: "Популярное", path: "/popular" },
	{ id: 2, name: "Свежее", path: "/latest" },
	{ id: 3, name: "Моя лента", path: "/my-line" },
	{ id: 4, name: "Подписки", path: "/subscriptions" },
];

export const Sidebar: FC<SidebarProps> = ({
	className,
	...props
}): JSX.Element => {
	const [activePage, setActivePage] = useState<number | null>(null);

	const onActiveHandler = (id: number) => {
		setActivePage(id);
	};

	return (
		<div className={cn(styles.sidebar, className)} {...props}>
			<ul className={styles.sidebarItems}>
				{pages.map((item) => (
					<li
						className={cn(styles.sidebarItem, {
							[styles.active]: activePage === item.id,
						})}
						onClick={() => onActiveHandler(item.id)}
						key={item.name}
					>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};
