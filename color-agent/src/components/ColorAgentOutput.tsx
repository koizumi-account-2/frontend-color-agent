import { useState } from "react";
import { Purpose, SuggestionResult } from "../utils/types";

type PurposeTitle = {
  [K in keyof Purpose]: string;
};

export const ColorAgentOutput = ({
  suggestion,
}: {
  suggestion: SuggestionResult;
}) => {
  const purposeTitle: PurposeTitle = {
    tone: "色のトーン",
    user_context: "ユーザーのコンテキスト",
    target_user: "ターゲットユーザー",
    emotion: "感情",
  };
  const [copiedColor, setCopiedColor] = useState<string>("");

  const handleCopy = async (colorCode: string) => {
    try {
      await navigator.clipboard.writeText(colorCode);
      setCopiedColor(colorCode);
      setTimeout(() => setCopiedColor(""), 2000); // 2秒後に元に戻す
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

  return (
    <>
      <div className="text- p-2 bg-white shadow-md rounded-md mt-10 w-full">
        <label className="block text-lg font-medium text-gray-700">
          目的の分析結果
        </label>
        <div className="w-full bg-gray-200 rounded-md">
          <div className="dw-full p-4 text-gray-800">
            {Object.keys(purposeTitle).map((x) => {
              const key = x as keyof Purpose;
              return (
                <div className="w-full ">
                  <h2 className="text-lg font-bold">{purposeTitle[key]}</h2>
                  <p className="">{suggestion.purpose[key]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text- p-2 bg-white shadow-md rounded-md mt-10 w-full">
        <label className="block text-lg font-medium text-gray-700">
          色の提案
        </label>
        {suggestion.suggestions.map((x) => {
          return (
            <div className="mb-6 shadow-md rounded-md p-4">
              <div className="flex items-center">
                <div className="block text-sm font-medium text-gray-700">
                  {x.name}:{x.color}
                </div>
                <button
                  onClick={() => handleCopy(x.color)}
                  className="border border-gray-300 px-3 py-1 text-sm text-black bg-white rounded hover:bg-gray-200 transition"
                >
                  {copiedColor === x.color ? "コピーしました！" : `コピー`}
                </button>
              </div>

              <div
                className="w-24 h-24"
                style={{ backgroundColor: x.color }}
              ></div>
              <p className="mt-1 text-sm text-gray-500">{x.reason}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
