import type { NextPage } from "next";

import { withLayout } from "../app/layout/Layout";

const Home: NextPage = (): JSX.Element => {
	return <div>Home page</div>;
};

export default withLayout(Home);
