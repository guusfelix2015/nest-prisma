import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Post) {
    const posts = await this.prisma.post.create({ data });

    return { posts };
  }

  async findAll() {
    const posts = await this.prisma.post.findMany();

    return { posts };
  }

  async update(id: number, data: Post) {
    const post = await this.prisma.post.update({
      where: { id: Number(id) },
      data,
    });

    return { post };
  }

  async remove(id: number) {
    const post = await this.prisma.post.delete({
      where: { id: Number(id) },
    });

    return { post };
  }
}
