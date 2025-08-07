import { NextResponse } from "next/server";

import { connect, prisma } from "../route";

// タスクを編集
export const PUT = async (req: Request) => {
  try {
    await connect();

    const id: string = req.url.split("/tasks")[1];
    const { title } = await req.json();

    const newTask = await prisma.task.update({
      data: { title },
      where: { id },
    });
    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの編集に失敗しました", error },
      { status: 500 }
    );
  } finally {
    prisma.$disconnect();
  }
};

// タスクを削除
export const DELETE = async (req: Request) => {
  try {
    await connect();

    const id: string = req.url.split("/tasks")[1];
    const task = await prisma.task.delete({
      where: { id },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの削除に失敗しました", error },
      { status: 500 }
    );
  }
};
