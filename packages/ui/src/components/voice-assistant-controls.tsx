"use client";

import React from "react";
import { Button } from "@workspace/ui/components/button";
import { Mic, Square } from "lucide-react";

type VoiceAssistantControlsProps = {
  isConnected: boolean;
  isConnecting: boolean;
  isSpeaking: boolean;
  onStart: () => void;
  onStop: () => void;
};

export function VoiceAssistantControls({
  isConnected,
  isConnecting,
  isSpeaking,
  onStart,
  onStop,
}: VoiceAssistantControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <Button onClick={onStart} disabled={isConnecting || isConnected}>
        <Mic className="mr-2 h-4 w-4" />
        {isConnecting ? "Connecting" : "Start"}
      </Button>
      <Button onClick={onStop} variant="destructive" disabled={!isConnected}>
        <Square className="mr-2 h-4 w-4" />
        Stop
      </Button>
      <span className="text-xs text-white/70">
        {isSpeaking
          ? "Assistant is speaking"
          : isConnected
            ? "Connected"
            : "Idle"}
      </span>
    </div>
  );
}
