import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
});

export { openai };
