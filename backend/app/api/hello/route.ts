import { NextResponse } from 'next/server';
import prisma from 'lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return NextResponse.json(users);
  // return NextResponse.json({ message: 'Hello - GET' });
}

export async function POST() {
  return NextResponse.json({ message: 'Hello - POST' });
}

export async function PUT() {
  return NextResponse.json({ message: 'Hello - PUT' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Hello - DELETE' });
}