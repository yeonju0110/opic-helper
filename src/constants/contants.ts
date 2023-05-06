import { Gender } from '@/types/gender';

export const MESSAGES = Object.freeze({
  PROJECT_NAME: 'Opic HELPER',
  PROJECT_DESCRIPTION: 'GPT를 이용한 오픽공부 도우미입니다.',
  ACCOUNT: '@yeonju0110',
  AGE: '나이를 입력해주세요.',
  GENDER: '성별을 골라주세요.',
  SURVEY_TITLE: 'Background Survey',
  SURVEY_INFO: '사람들이 많이 택하는 답변으로 선택됩니다.',
  SURVEY_OPTION:
    '일 경험 없음 / 학생 아님, 수강 후 5년 지남 / 아파트에 홀로 거주',
  CHAT_QUS: '질문을 입력해주세요.',
  CHAT_CUSTOM: '답변에 포함하고 싶은 내용이 있으면 적어주세요.',
  CHAT_ANS: '답변',
  BTN_START: '시작하기',
  BTN_SUBMIT: '답변 만들기',
  BTN_EASY: '쉽게',
  BTN_HARD: '어렵게',
  BTN_COPY: '복사',
  GPT_QUS:
    '최근에 집에서 휴가를 보냈을 때 했던 일들을 구체적으로 말해보세요. 하루의 시작부터 끝까지 당신이 했던 것에 대한 구체적인 묘사를 하고, 참여했던 활동 그리고 그날 만났던 사람들 모두 묘사해 보세요.',
  GPT_CUSTOM:
    '없으면 작성하지 않으셔도 괜찮아요. (ex. 나는 최근에 집에서 친구와 넷플릭스를 봤어.)',
  GPT_ANS: 'GPT가 답해줄 거에요!',
});

export const GENERATOR = Object.freeze({
  getMe: (age: number, gender: Gender): string =>
    `나는 ${age}살, ${
      gender === 'male' ? '남자' : '여자'
    }, 혼자 아파트에 거주하고, 한국에 살고, 학생은 아니고, 수업을 들은지 5년이 지났어. `,
  COMMAND: '다음 문장을 영어로 대답해줘. ',
  CUSTOM_COMMAND: '다음 내용을 포함하세요. ',
  OPTIONS: `. 10문장으로 내가 친구에게 얘기하는 것처럼 말해줘. `,
});
