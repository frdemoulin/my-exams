import prisma from "@/lib/db";
import { TopicData } from "@/types/topic";
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

export async function fetchTopicsWithIncludes(): Promise<TopicData[]> {
    return await prisma.topic.findMany({
        include: {
            subjects: {
                select: {
                    longDescription: true,
                },
                orderBy: {
                    longDescription: "asc",
                },
            }
        },
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
