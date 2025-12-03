"use client";

export default function SandboxLogCard({ logs = [] }) {
  return (
    <div className="p-4 border rounded-xl bg-white/10 backdrop-blur text-black">
      <h3 className="font-bold mb-2">Sandbox Logs</h3>
      <ul className="list-disc pl-5 space-y-1">
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
}
