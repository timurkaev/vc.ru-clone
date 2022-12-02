import cn from "classnames";
import type { FC } from "react";

import styles from "./Header.module.css";
import type { HeaderProps } from "./Header.props";

export const Header: FC<HeaderProps> = ({
	className,
	...props
}): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			Header
		</header>
	);
};
