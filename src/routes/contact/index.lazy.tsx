import { createLazyFileRoute } from "@tanstack/react-router";
import { ApplyForm } from "../../components/Export";
import useTitle from "../../hooks/useTitle";

export const Route = createLazyFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  useTitle({ title: "Contact with us." });
  return <ApplyForm />;
}
