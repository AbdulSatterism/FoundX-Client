
import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "@/src/components/UI/Container";
import ItemCard from "@/src/components/UI/ItemCard";
import { TPost } from "@/src/types";
import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <div className="my-8 section-title">
        <h2 className="mb-2 text-2xl text-center">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="grid justify-center gap-10 my-8 mx-auto sm:grid-cols-1 md:grid-cols-4">
        {posts.map((item: TPost) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
