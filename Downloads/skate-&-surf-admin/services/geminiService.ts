
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductDescription = async (productName: string, category: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a professional, persuasive e-commerce description for a ${category} product named "${productName}". Keep it under 100 words and highlight performance and style.`,
    });
    return response.text || "Failed to generate description.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating AI description.";
  }
};

export const getInventoryInsight = async (stockLevel: number, salesVelocity: string): Promise<string> => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide a short, 1-sentence inventory insight for an item with ${stockLevel} units remaining and ${salesVelocity} sales velocity.`,
      });
      return response.text || "Stock levels are normal.";
    } catch (error) {
      return "Stable inventory.";
    }
};
