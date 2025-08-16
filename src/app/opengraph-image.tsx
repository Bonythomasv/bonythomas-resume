import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";

export const runtime = "edge";

export const alt = "Minimalist Resume";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Disable Open Graph image generation by returning 404
export default function Image() {
  return new Response(null, { status: 404, statusText: 'Not Found' });
}
