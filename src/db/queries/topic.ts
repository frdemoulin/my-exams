import prisma from "@/lib/db";
import { Option } from "@/types/option";
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
                    id: true,
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

export async function fetchTopicById(id: string): Promise<TopicData | null> {
    return await prisma.topic.findUnique({
        where: {
            id,
        },
        include: {
            subjects: {
                select: {
                    id: true,
                    longDescription: true,
                },
                orderBy: {
                    longDescription: "asc",
                },
            }
        },
    });
}

export async function fetchSubjectsOptionsByTopicId(id: string): Promise<Option[] | null> {
    const topics = await prisma.topic.findUnique({
        where: {
            id,
        },
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
    });

    if (!topics) {
        return null;
    }

    return topics.subjects.map((subject) => ({
        value: subject.longDescription,
        label: subject.longDescription,
    }));
}