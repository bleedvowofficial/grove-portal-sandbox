// components/SandboxLogCard.js
// Shows mock logs for the sandbox testing environment.

'use client';
import { useState } from 'react';

export default function SandboxLogCard() {
  const [logs, setLogs] = useState([
    'Sandbox initialized.',
    'UbermanCounter loaded.',
    'HeadphoneAlarm ready.',
  ]);

  const addLog = () => {
    setLogs(prev => [...prev, `Log entry at ${new Date().toLocaleTimeString()}`]);
  };

  return (
    <div>
      <button
        onClick={addLog}
        style={{ marginBottom: '10px', padding: '10px' }}
      >
        Add Test Log
      </button>

      <div
        style={{
          background: '#111',
          padding: '10px',
          borderRadius: '6px',
        }}
      >
        {logs.map((l, index) => (
          <p key={index} style={{ marginBottom: '5px' }}>{l}</p>
        ))}
      </div>
    </div>
  );
}
