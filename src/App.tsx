/** @copyright Bản quyền thuộc MH 2026 */
import { useState } from 'react';
import { CultureCanvas } from './components/CultureCanvas';
import { QuestionNavBar } from './components/QuestionNavBar';
import { QuestionCard } from './components/QuestionCard';
import { QUIZ_QUESTIONS } from './data/quizData';
import type { UserAnswerRecord } from './types';
import { sounds } from './utils/soundEffects';

const MOTIVATIONAL_FEEDBACKS = [
  "Chưa chính xác rồi bạn ơi! Đừng nản lòng, hãy cùng suy nghĩ thêm và thử lại phương án khác nhé! 💪",
  "Phương án này chưa đúng với nội dung bài học! Hãy cùng đọc kỹ lại câu hỏi và chọn lại nào! ✨",
  "Suýt nữa thì đúng rồi! Hãy cùng lớp thảo luận và thử một phương án khác xem sao nhé! 🎯",
  "Đừng lo, chọn lại là cơ hội để cả lớp nhớ lâu hơn! Hãy chọn phương án khác nào! 💡",
  "Hãy chú ý các từ khóa cốt lõi trong lý luận để tìm ra đáp án chính xác nhé! 🚀"
];

export function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Lưu trạng thái câu trả lời cho từng câu trong 10 câu
  const [answers, setAnswers] = useState<Record<number, UserAnswerRecord>>({});

  // Quyền trợ giúp toàn cục
  const [usedLifelines, setUsedLifelines] = useState({
    fiftyFifty: false,
    audiencePoll: false,
  });

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const currentRecord: UserAnswerRecord = answers[currentQuestion.id] || {
    questionId: currentQuestion.id,
    selectedOption: null,
    wrongAttempts: [],
    isAnsweredCorrectly: false,
    eliminatedOptions: [],
    feedbackMessage: undefined,
  };

  // Chọn một phương án: Tự động kiểm tra ĐÚNG hay SAI ngay lập tức
  const handleSelectOption = (index: number) => {
    if (currentRecord.isAnsweredCorrectly) return;
    if (currentRecord.wrongAttempts.includes(index)) return;

    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      // ĐÚNG: Đánh dấu đã trả lời đúng, mở khung giải thích
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          ...currentRecord,
          selectedOption: index,
          isAnsweredCorrectly: true,
          feedbackMessage: undefined,
        },
      }));
    } else {
      // SAI: Âm thanh báo sai, lưu vào wrongAttempts, đưa ra câu động viên và CHO PHÉP CHỌN TIẾP
      sounds.playWrong();
      const randomFeedback = MOTIVATIONAL_FEEDBACKS[Math.floor(Math.random() * MOTIVATIONAL_FEEDBACKS.length)];

      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          ...currentRecord,
          selectedOption: index,
          wrongAttempts: [...currentRecord.wrongAttempts, index],
          feedbackMessage: randomFeedback,
        },
      }));
    }
  };

  // Thử lại câu hiện tại từ đầu
  const handleRetryQuestion = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedOption: null,
        wrongAttempts: [],
        isAnsweredCorrectly: false,
        eliminatedOptions: [],
        feedbackMessage: undefined,
      },
    }));
  };

  // Chuyển sang câu tiếp theo (nếu ở câu cuối thì quay về câu 1)
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 >= QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(0);
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  // Quay lại câu trước
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Nhảy trực tiếp đến câu bất kỳ
  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Trợ giúp 50:50
  const handleUseFiftyFifty = () => {
    if (usedLifelines.fiftyFifty || currentRecord.isAnsweredCorrectly) return;

    sounds.playLifeline();
    setUsedLifelines((prev) => ({ ...prev, fiftyFifty: true }));

    const wrongIndexes = [0, 1, 2, 3].filter(
      (idx) => idx !== currentQuestion.correctIndex
    );
    const shuffled = [...wrongIndexes].sort(() => 0.5 - Math.random());
    const eliminated = [shuffled[0], shuffled[1]];

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...currentRecord,
        eliminatedOptions: eliminated,
      },
    }));
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-culture-light text-stone-900 flex flex-col justify-between selection:bg-amber-500 selection:text-white font-sans relative">
      {/* 3D Canvas Particle Background */}
      <CultureCanvas />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col h-full justify-between py-2 sm:py-3">
        {/* Chỉ giữ duy nhất 10 nút câu hỏi ở trên cùng, căn giữa gọn gàng */}
        <header className="w-full px-2 shrink-0">
          <QuestionNavBar
            totalQuestions={QUIZ_QUESTIONS.length}
            currentIndex={currentQuestionIndex}
            answers={answers}
            onSelectQuestion={handleJumpToQuestion}
          />
        </header>

        {/* Luôn hiển thị Câu Hỏi Vừa Vặn Khung Hình Máy Chiếu */}
        <main className="flex-1 flex items-center justify-center p-2 min-h-0">
          <QuestionCard
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={QUIZ_QUESTIONS.length}
            selectedOption={currentRecord.selectedOption}
            wrongAttempts={currentRecord.wrongAttempts}
            isAnsweredCorrectly={currentRecord.isAnsweredCorrectly}
            feedbackMessage={currentRecord.feedbackMessage}
            eliminatedOptions={currentRecord.eliminatedOptions}
            usedLifelines={usedLifelines}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onUseFiftyFifty={handleUseFiftyFifty}
            onRetryQuestion={handleRetryQuestion}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
