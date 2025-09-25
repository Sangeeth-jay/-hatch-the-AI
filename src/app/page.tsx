import Login from "./(auth)/login/page";

export default function Home() {
  return (
    <>
      <main className="w-full h-dvh bg-background">
        <div className="max-w-4xl mx-auto h-full">
          <Login/>
        </div>
      </main>
    </>
  );
}
