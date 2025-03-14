import type { Route } from "./+types/home";
import ResultScreen from "~/result/result";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My.Size Ruler" },
  ];
}

export default function Result() {
  return <ResultScreen />;
}
