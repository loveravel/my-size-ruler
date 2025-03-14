import type { Route } from "./+types/home";
import MeasurementGuideScreen from "~/measurement-guide/measurement-guide";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My.Size Ruler" },
  ];
}

export default function Measurement() {
  return <MeasurementGuideScreen />;
}
