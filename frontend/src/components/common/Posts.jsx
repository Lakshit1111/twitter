import Post from "./Post";
import PostSkeleton from "../skeletons/PostSkeleton";
// import { POSTS } from "../../utils/db/dummy";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Posts = ({ feedType }) => {


	const getEndPoint = () => {
		switch(feedType) {
			case "forYou":
				return "/api/post/all";
			case "following":
				return "/api/post/following";
			default :
				return "/api/post/all";
		}
	}
	const Endpoint = getEndPoint();

	const {data:posts , isLoading , refetch , isRefetching} = useQuery({
		queryKey : ["post"],
		queryFn : async() => {
			try {
				const res = await fetch(Endpoint);

				const data  = await res.json();
				if(data.error) return null;

				if(!res.ok) throw new Error(data.error || "Something went wrong");
				
				return data;
				
			} catch (error) {
				throw new Error(error);
			}
		}
	})
	useEffect(() => {
		refetch();
	},[feedType , refetch])

	return (
		<>
			{(isLoading || isRefetching) && (
				<div className='flex flex-col justify-center'>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</div>
			)}
			{!isLoading && posts?.length === 0 && <p className='text-center my-4'>No posts in this tab. Switch 👻</p>}
			{!isLoading && posts && (
				<div>
					{posts.map((post) => (
						
						<Post key={post._id} post={post} refetchPosts={refetch}/>
					))}
				</div>
			)}
		</>
	);
};
export default Posts;