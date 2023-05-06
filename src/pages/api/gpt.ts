/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { CreateChatCompletionRequest } from 'openai';
import { GptRequestData } from '@/types/question-form';
import { processQuestion } from '../../utils/process-question';

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getChat = async (dto: GptRequestData): Promise<string> => {
  const query: string = processQuestion(
    dto.age,
    dto.gender,
    dto.question,
    dto.custom
  );

  const completionParams: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    temperature: 1,
    max_tokens: 2048,
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: `${query}`,
      },
    ],
  };

  const response = await openai.createChatCompletion(completionParams);
  return response.data.choices[0].message.content;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: 'OpenAI API key not configured',
        },
      });
      return;
    }

    try {
      const body: GptRequestData = req.body;
      const answer = await getChat(body);
      res.status(200).json({ result: answer });
    } catch (error) {
      res.status(500).json({
        error: {
          message: 'OpenAI error',
        },
      });
    }
  }
}
