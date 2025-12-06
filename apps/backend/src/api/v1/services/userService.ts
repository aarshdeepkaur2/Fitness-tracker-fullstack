import prisma from "../../../../prisma/client";
import { User } from "@prisma/client";

export const getUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const createUser = async (data: { id: string; name: string; email: string }): Promise<User> => {
  return prisma.user.create({
    data: {
      id: data.id,
      name: data.name,
      email: data.email
    }
  });
};
