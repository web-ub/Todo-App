import { NextResponse } from "next/server";

import { connect, prisma } from "../route";

// タスクを編集
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const connectResponse = await connect();
    if (connectResponse) return connectResponse;

    const { title } = await req.json();
    const { id } = await params;

    const updatedTask = await prisma.task.update({
      data: { title },
      where: { id },
    });
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの編集に失敗しました", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

// タスクを削除
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const connectResponse = await connect();
    if (connectResponse) return connectResponse;

    const { id } = await params;

    const task = await prisma.task.delete({
      where: { id },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの削除に失敗しました", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
