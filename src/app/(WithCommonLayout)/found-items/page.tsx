/* eslint-disable prettier/prettier */

import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/post";
import axiosInstance from "@/src/lib/axiosInstance";
import { TPost } from "@/src/types";

const FoundItems = async () => {
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: TPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
};

export default FoundItems;
