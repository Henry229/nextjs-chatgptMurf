import axios from 'axios';

export type GenerateSpeechInput = {
  voiceId: string;
  text: string;
  format: string;
  channelType: string;
  sampleRate: number;
};

export const api = axios.create({
  baseURL: 'https://api.murf.ai',
});

export async function getMurfToken() {
  return api.get('/v1/auth/token', {
    headers: {
      'api-key': import.meta.env.VITE_MURF_API_KEY,
    },
  });
}

export async function generateSpeechWithKey(
  token: string,
  data: GenerateSpeechInput
) {
  return api.post('/v1/speech/generate', data, {
    headers: {
      token,
      'Content-Type': 'application/json',
    },
  });
}
