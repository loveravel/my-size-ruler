import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("calibration-guide", './routes/calibration-guide.tsx'),
  route("calibration", './routes/calibration.tsx'),
  route("measurement-guide", './routes/measurement-guide.tsx'),
  route("measurement", './routes/measurement.tsx'),
  route("result", './routes/result.tsx'),
] satisfies RouteConfig;
