import cn from "classnames";
import type { FC } from "react";

import styles from "./Input.module.css";
import type { InputProps } from "./Input.props";

export const Input: FC<InputProps> = ({
	className,
	placeholder,
	...props
}): JSX.Element => {
	return (
		<input
			placeholder={placeholder}
			className={cn(styles.input, className)}
			{...props}
		/>
	);
};
