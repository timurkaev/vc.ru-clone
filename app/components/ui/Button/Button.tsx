import cn from "classnames";
import type { FC } from "react";

import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.props";

export const Button: FC<ButtonProps> = ({
	children,
	bg = "white",
	className,
	...props
}): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.ghost]: bg === "ghost",
			})}
			{...props}
		>
			{children}
		</button>
	);
};
