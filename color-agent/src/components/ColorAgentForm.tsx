import React, { useState } from "react";
import { SuggestionResult } from "../utils/types";
import { ColorAgentInput } from "./ColorAgentInput";
import { ColorAgentOutput } from "./ColorAgentOutput";
export const ColorAgentForm = () => {
  const [result, setResult] = useState<SuggestionResult | null>(null);

  return (
    <div className="flex flex-col h-screen w-full p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold">Color Agent</h1>
      <ColorAgentInput setResult={setResult} />
      {result && <ColorAgentOutput suggestion={result} />}
    </div>
  );
};
