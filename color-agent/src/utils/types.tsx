export type Suggestion = {
  color: string;
  name: string;
  reason: string;
};

export type Purpose = {
  tone: string;
  user_context: string;
  target_user: string;
  emotion: string;
};

export type SuggestionResult = {
  purpose: Purpose;
  suggestions: Suggestion[];
  judge_reason: string;
};
