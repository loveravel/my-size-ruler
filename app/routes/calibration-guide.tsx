import type { Route } from "./+types/home";
import CalibrationGuideScreen from "~/calibration-guide/calibration-guide";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My.Size Ruler" },
  ];
}

export default function CalibrationGuide() {
  return <CalibrationGuideScreen />;
}
