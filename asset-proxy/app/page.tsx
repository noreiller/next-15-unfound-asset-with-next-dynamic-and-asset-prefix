export default async function Home() {
  return (
    <p>
      Nothing to see here, please go to{" "}
      <a href="http://localhost:3000/">http://localhost:3000/</a>.
    </p>
  );
}

export const revalidate = 0;
