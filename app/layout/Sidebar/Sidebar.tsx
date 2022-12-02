import cn from "classnames";
import type { FC } from "react";

import styles from "./Sidebar.module.css";
import type { SidebarProps } from "./Sidebar.props";

export const Sidebar: FC<SidebarProps> = ({
	className,
	...props
}): JSX.Element => {
	return (
		<div className={cn(styles.sidebar, className)} {...props}>
			Sidebar
		</div>
	);
};
