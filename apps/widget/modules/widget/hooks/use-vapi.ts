"use client"
import Vapi from "@vapi-ai/web";

import { useState, useEffect } from "react";

interface TanscriptMessage {
    role: "user" | "assistant";
    text: string;
}

export const useVapi =() => {
    
const [vapi, setVapi ] = useState<Vapi | null>(null);
const [isConnected, setIsConnected]= useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);
const [isConnecting , setIsConnecting] = useState(false);
const [transcript, setIsTranscript ] = useState<TanscriptMessage[]>([]);
//only for testing , users will give their api key and we would configure the workflow making the app more flexible
useEffect (() => {
    const vapiInstance = new Vapi ("fd16f911-9cfd-43c9-8578-447580ef9819");
    setVapi (vapiInstance);

    vapiInstance.on("call-start", ()=> {
        setIsConnected(true);
        setIsConnecting(false);
        setIsTranscript([])

    })

        vapiInstance.on("call-end", ()=> {
        setIsConnected(false);
        setIsConnecting(false);
        setIsSpeaking(false)

    })
        vapiInstance.on("speech-start", ()=> {
        setIsSpeaking(true);

    })
        vapiInstance.on("speech-end", ()=> {
        setIsSpeaking(false);

    })
      vapiInstance.on("error", (error)=> {
        console.log(error);
        setIsConnected(false);
        setIsConnecting(false);
        setIsSpeaking(false);

    })
      vapiInstance.on("message", (message)=> {
        if (message.type === "transcript" && message.transcriptType === "final") {
            setIsTranscript((prev) => [
                ...prev,
                {
                    role: "user",
                    text: message.text,
                },
            ])
        }

    })
    return ()=> {
        vapiInstance?.stop();
    }





},[]);


const startCall = () => {
    setIsConnecting(true);

    ////only for testing , users will give their api key and we would configure the workflow making the app more flexible  enabling WHITE LABELLING TO THE APP
    if (vapi) {
        vapi.start("7aae6aae-b6c4-47e4-bb18-99eb20824af7")
    }
}


const endCall = () => {
    if (vapi) {
        vapi.stop();
    }
}



return {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,

}
}