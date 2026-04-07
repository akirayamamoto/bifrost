import { Outlet, createFileRoute } from "@tanstack/react-router";
import Layout from "@/app/login/layout";

export const Route = createFileRoute("/login")({
	component: LayoutRoute,
});

function LayoutRoute() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}
