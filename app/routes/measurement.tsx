import type { Route } from "./+types/home";
import MeasurementScreen from "~/measurement/measurment";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My.Size Ruler" },
  ];
}

export default function Measurement() {
  return <MeasurementScreen />;
}
