import type { Route } from "./+types/home";
import ResultOnlyScreen from "~/result-only/result-only";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My.Size Ruler" },
  ];
}

export default function ResultOnly() {
  return <ResultOnlyScreen />;
}
