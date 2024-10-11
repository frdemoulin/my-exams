import prisma from "@/lib/db";
import { Topic } from "@prisma/client";

export async function fetchTopics(): Promise<Topic[]> {
    return await prisma.topic.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchTopicById(id: string): Promise<Topic | null> {
    return await prisma.topic.findUnique({
        where: {
            id,
        }
    });
}
