import { auth } from "@/lib/auth/auth";
import { cache } from "react";

// deduplicate auth request
// In Next.js 16, auth() is async because it uses headers() internally
export default cache(async () => {
    return await auth();
});