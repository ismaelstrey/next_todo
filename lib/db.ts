import { prisma } from "./prisma";

export interface TodoDTO {
    id: number;
    description: string;
}

export async function getAllTodos() {
    return await prisma.Todo.findMany();
}
export async function createTodo(description: string) {
    return await prisma.Todo.create({
        data: {
            description
        }
    })
}

