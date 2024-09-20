import { auth } from "@/auth";
import { cache } from "react";

// deduplicate auth request
export default cache(auth);