"use server"

// server/ai.ts
export async function getAIResponse(prompt: string): Promise<{ text: string }> {
  // This simulates an AI response for learning purposes
  return { 
    text: `This is a simulated AI response to: "${prompt}". 
           For learning Next.js, you can replace this with real AI integration later.`
  };
}

// import Anthropic from '@anthropic-ai/sdk';

// const anthropic = new Anthropic({
//   apiKey: process.env.ANTHROPIC_API_KEY, // Make sure to set this in your .env file
// });

// export async function getAIResponse(prompt: string): Promise<{ text: string }> {
//   const response = await anthropic.messages.create({
//     model: 'claude-3-opus-20240229',
//     max_tokens: 1024,
//     messages: [{ role: 'user', content: prompt }]
//   });

//   console.log(response, 'response');

//   const text = response.content[0]?.type === 'text' ? response.content[0]?.text : '';
//   return { text };
// }


// import Anthropic from '@anthropic-ai/sdk';

// const anthropic = new Anthropic({
//   apiKey: 'my_api_key', // defaults to process.env["ANTHROPIC_API_KEY"]
// });

// const msg = await anthropic.messages.create({
//   model: "claude-3-5-sonnet-20241022",
//   max_tokens: 1024,
//   messages: [{ role: "user", content: "Hello, Claude" }],
// });
// console.log(msg);


// import { generateText } from "ai"
// import { openai } from "@ai-sdk/openai"

// export async function getOpenaiResponse(prompt: string) {
//     try {
//         const { text } = await generateText({
//             model: openai("gpt-4o-mini"),
//             prompt: prompt
//         })
//         return text
//     } catch (error) {
//         console.log(error)
//     }
// }


