import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Container = ({ children }: Props) => {
	return (
		<div className="container flex items-center justify-between w-full max-w-[77.875rem] px-[0.9375rem] mx-auto">
			{children}
		</div>
	);
};

export default Container;
