import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/post";
import { getPost } from "@/src/services/Post";

interface IParams {
  params: {
    itemId: string;
  };
}
const ItemDetails = async ({ params }: IParams) => {
  const { data: post } = await getPost(params.itemId);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <Post key={post?._id} post={post} />
      </div>
    </Container>
  );
};

export default ItemDetails;
