import { z } from "zod";

import { createReleaseSchema } from "@/lib/validation";
import { Artist, Release, ReleaseType } from "@prisma/client";

export type CreateReleaseValues = z.infer<typeof createReleaseSchema>;
export type CreateReleaseErrors = z.inferFormattedError<typeof createReleaseSchema>;

export type ReleaseWithArtistAndReleaseType = {
    artist: Artist;
    releaseType: ReleaseType;
} & Release;