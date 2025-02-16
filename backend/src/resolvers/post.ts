
import { Post } from '../entities/post'
import { MyContext } from '../types'
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class PostResolver {    
    @Query(() => [Post]) 
    posts(
        @Ctx() {em}: MyContext
    ): Promise<Post[]> {
        return em.find(Post,{})
    }

    @Query(() => Post,{ nullable: true }) 
    post(
        @Arg('id',() => Int) id: number,
        @Ctx() {em}: MyContext
    ): Promise<Post | null> {
        return em.findOne(Post,{ id })
    }

    @Mutation(() => Post) 
    async createPost(
        @Arg('title') title: string,
        @Ctx() {em}: MyContext
    ): Promise<Post> {
        const post = em.create(Post, {title})
        await em.persistAndFlush(post)
        return post
    }

    @Mutation(() => Post, {nullable: true}) 
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true}) title: string,
        @Ctx() {em}: MyContext
    ): Promise<Post | null> {
        const post = await em.findOne(Post, {id})
        if(!post) {
            return null;
        }
        if(typeof title !== 'undefined'){
            post.title = title;
            await em.persistAndFlush(post)
        }
        
        return post
    }

    @Mutation(() => Boolean) 
    async deletePost(
        @Arg('id') id: number,
        @Ctx() {em}: MyContext
    ): Promise<Boolean> {
        try{
            await em.nativeDelete(Post, {id})
        } catch {
            return false
        }
        return true;
    }

}