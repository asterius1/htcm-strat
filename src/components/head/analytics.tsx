import type { RouteLocation } from "@builder.io/qwik-city";

interface AnalyticsProps {
  loc: RouteLocation;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Analytics = ({ loc }: AnalyticsProps) => {
  return (
    <>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "a1588a2a8d124240a3c389581529ab50"}'
      ></script>
    </>
  );
};
