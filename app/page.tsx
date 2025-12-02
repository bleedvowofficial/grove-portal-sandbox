// NOTE: page.tsx — homepage of Sandbox
import Button from "../components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Sandbox Active</h1>
      <p className="opacity-60">Build, break, experiment freely.</p>
      <Button>Test Button</Button>
    </main>
  );
}
