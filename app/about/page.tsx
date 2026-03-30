import prisma from "@/utils/db";

const AboutPage = async () => {
  const posts = await prisma.user.findMany();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1 className="text-3xl">{post.name}</h1>
            <p className="text-lg">{post.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutPage;
