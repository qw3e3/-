import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#102A43", brand: "#087E8B", sand: "#F7F4EE", gold: "#E7B23B" }, boxShadow: { card: "0 10px 30px rgba(16,42,67,.08)" } } }, plugins: [] } satisfies Config;
