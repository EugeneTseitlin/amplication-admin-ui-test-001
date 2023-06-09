/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Cart, Product } from "@prisma/client";

export class CartServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartFindManyArgs>
  ): Promise<number> {
    return this.prisma.cart.count(args);
  }

  async findMany<T extends Prisma.CartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartFindManyArgs>
  ): Promise<Cart[]> {
    return this.prisma.cart.findMany(args);
  }
  async findOne<T extends Prisma.CartFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartFindUniqueArgs>
  ): Promise<Cart | null> {
    return this.prisma.cart.findUnique(args);
  }
  async create<T extends Prisma.CartCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartCreateArgs>
  ): Promise<Cart> {
    return this.prisma.cart.create<T>(args);
  }
  async update<T extends Prisma.CartUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartUpdateArgs>
  ): Promise<Cart> {
    return this.prisma.cart.update<T>(args);
  }
  async delete<T extends Prisma.CartDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartDeleteArgs>
  ): Promise<Cart> {
    return this.prisma.cart.delete(args);
  }

  async getMyProduct(parentId: string): Promise<Product | null> {
    return this.prisma.cart
      .findUnique({
        where: { id: parentId },
      })
      .my_product();
  }
}
