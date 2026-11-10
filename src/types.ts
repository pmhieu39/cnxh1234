export interface Question {
  id: number;
  category: string;
  categoryBadge: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  keyTakeaway: string;
  quote?: string;
  points: number;
  funFact?: string;
  audiencePollDistribution?: [number, number, number, number];
}

export interface TeamScore {
  id: string;
  name: string;
  score: number;
  correctAnswers: number;
  color: string;
}

export type GameMode = 'presentation' | 'challenge' | 'team';

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: number | null;
  wrongAttempts: number[];
  isAnsweredCorrectly: boolean;
  eliminatedOptions: number[];
  feedbackMessage?: string;
}
