import Image from "next/image";
import type { FC } from "react";

import styles from "./Avatar.module.css";
import type { AvatarProps } from "./Avatar.props";

export const Avatar: FC<AvatarProps> = ({ url }) => {
	return (
		<div className={styles.avatar}>
			{url ? <Image src={url} alt="avatar" /> : <span>И</span>}
		</div>
	);
};
