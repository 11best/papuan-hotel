import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export async function GET() {
  const customers = await prisma.customer.findMany();
  return Response.json(customers);
}

export async function POST(req: Request) {
  const { name, address, phoneNumber, email, line, idCardNumber } =
    await req.json();
  const id = uuidv4();

  const newCustomer = await prisma.customer.create({
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
  return Response.json(newCustomer);
}
