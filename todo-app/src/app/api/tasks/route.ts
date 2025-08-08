import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connect = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    return NextResponse.json(
      { message: "データベースとの接続に失敗しました", error },
      { status: 500 }
    );
  }
};

// 全てのタスクを取得
export const GET = async () => {
  try {
    await connect();

    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの取得に失敗しました", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

// タスクを追加
export const POST = async (req: Request) => {
  try {
    await connect();

    const { title } = await req.json();
    if (!title)
      return NextResponse.json(
        { message: "タイトルが正しくありません" },
        { status: 400 }
      );

    const newTask = await prisma.task.create({ data: { title } });
    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(
      { message: "タスクの追加に失敗しました", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
