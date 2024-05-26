import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export async function GET() {
  const newPost = await prisma.customer.findMany();
  return Response.json(newPost);
}

export async function POST(req: Request) {
  const { name, address, phoneNumber, email, line, idCardNumber } =
    await req.json();
  const id = uuidv4();

  const newPost = await prisma.customer.create({
    data: {
      id,
      name,
      address,
      phoneNumber,
      email,
      line,
      idCardNumber,
    },
  });
  return Response.json(newPost);
}
