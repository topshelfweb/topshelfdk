import { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
	return (
		<div className={"w-full px-4 lg:px-48 xl:px-68 " + className}>
			{children}
		</div>
	);
}