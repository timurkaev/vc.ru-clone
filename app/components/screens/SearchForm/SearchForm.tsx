import React from "react";

import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";

import PlusIcon from "./icons/plus.svg";

export const SearchForm = () => {
	return (
		<form>
			<Input />
			<Button>
				<PlusIcon /> Создать
			</Button>
		</form>
	);
};
