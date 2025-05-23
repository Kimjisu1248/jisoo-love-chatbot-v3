export default function analyzeAnswers(input) {
  // 테스트용: input에 따라 캐릭터 반응 생성
  if (input.includes("영화")) return "나랑 로맨스 영화 보러 갈래?";
  if (input.includes("피곤")) return "지수공주님, 피곤하면 쉬어야지. 내가 안아줄까?";
  return "응응~ 너랑 얘기하는 거 좋아!";
}
