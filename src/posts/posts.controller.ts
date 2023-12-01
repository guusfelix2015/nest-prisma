import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() data: PostModel) {
    return this.postsService.create(data);
  }

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @Put(':id')
  async update(@Body() data: PostModel, @Param('id') id: string) {
    return this.postsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
