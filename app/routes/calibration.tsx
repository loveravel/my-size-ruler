import type { Route } from "./+types/home";
import CalibrationScreen from "~/calibration/calibration";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My.Size Ruler" },
  ];
}

export default function Calibration() {
  return <CalibrationScreen />;
}
