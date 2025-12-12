"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { AnimatedBackground } from "@workspace/ui/components/animated-bg";
import { PhoneMock } from "@workspace/ui/components/phone-mock";
import { FloatingCard } from "@workspace/ui/components/floating-card";
import { VoiceAssistantControls } from "@workspace/ui/components/voice-assistant-controls";
import { Particles } from "@workspace/ui/components/particles";

export default function Page() {
  const {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <AnimatedBackground className="min-h-dvh">
      <Particles count={28} />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-6 py-20 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Echo AI
            Assistant
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Smart AI for your everyday needs
          </h1>
          <p className="mt-4 text-white/80">
            Use Echo to plan, purchase, deliver, and organize. Hands-free with
            voice.
          </p>

          <div className="mt-6">
            <VoiceAssistantControls
              isConnected={isConnected}
              isConnecting={isConnecting}
              isSpeaking={isSpeaking}
              onStart={startCall}
              onStop={endCall}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FloatingCard>
              <div className="text-sm text-white/80">Complete your profile</div>
            </FloatingCard>
            <FloatingCard delay={0.1}>
              <div className="text-sm text-white/80">
                Fast processing of requests
              </div>
            </FloatingCard>
            <FloatingCard delay={0.2}>
              <div className="text-sm text-white/80">
                Monthly / Yearly plans
              </div>
            </FloatingCard>
            <FloatingCard delay={0.3}>
              <div className="text-sm text-white/80">Best value lifetime</div>
            </FloatingCard>
          </div>
        </div>

        <PhoneMock
          screen={
            <div className="flex h-full w-full flex-col gap-3 bg-gradient-to-b from-violet-900 via-fuchsia-900 to-black p-4 text-white">
              <div className="mt-8 text-sm opacity-80">Hello, Echo</div>
              <div className="text-lg font-semibold">
                Use AI to meet all your needs
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-white/10 p-3 text-xs">
                  Purchases
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-xs">
                  Delivery
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-xs">
                  Tickets
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-xs">Events</div>
              </div>
              <div className="mt-auto whitespace-pre-wrap rounded-xl bg-black/50 p-3 text-xs leading-relaxed">
                {transcript.slice(-4).map((m, i) => (
                  <div key={i} className="opacity-80">
                    {m.role === "user" ? "You:" : "Echo:"} {m.text}
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </AnimatedBackground>
  );
}
