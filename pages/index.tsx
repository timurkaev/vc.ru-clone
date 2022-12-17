import type { NextPage } from "next";

import { Avatar } from "../app/components/ui/Avatar/Avatar";
import { withLayout } from "../app/layout/Layout";

const Home: NextPage = (): JSX.Element => {
	return (
		<div>
			Home page <Avatar url="" />
		</div>
	);
};

export default withLayout(Home);
