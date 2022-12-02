import type { FC } from "react";

import { Header } from "./Header/Header";
import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FC
) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
