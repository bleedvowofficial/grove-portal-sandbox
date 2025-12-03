"use client";

import { useEffect, useRef, useState } from "react";

export default function HeadphoneAlarm({ active }) {
  const audioRef = useRef(null);
  const [headphones, setHeadphones] = useState(null);

  // Detect audio output devices
  async function detectHeadphones() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioOutputs = devices.filter(d => d.kind === "audiooutput");

    // Select device with "head" in label
    const hp = audioOutputs.find(d => d.label.toLowerCase().includes("head"));
    setHeadphones(hp || null);
  }

  // Route alarm to detected headphones if possible
  async function routeToHeadphones() {
    if (!audioRef.current || !headphones) return;
    if (audioRef.current.setSinkId) {
      try {
        await audioRef.current.setSinkId(headphones.deviceId);
        console.log("Routed alarm to:", headphones.label);
      } catch (e) {
        console.log("Failed to route audio:", e);
      }
    }
  }

  useEffect(() => {
    detectHeadphones();
    navigator.mediaDevices.addEventListener("devicechange", detectHeadphones);
    return () =>
      navigator.mediaDevices.removeEventListener("devicechange", detectHeadphones);
  }, []);

  useEffect(() => {
    routeToHeadphones();
  }, [headphones]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (active) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [active]);

  return (
    <audio
      ref={audioRef}
      src="/alarm.mp3"
      loop
      preload="auto"
    />
  );
}
