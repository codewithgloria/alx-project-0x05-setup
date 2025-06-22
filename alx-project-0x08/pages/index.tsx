import React, { useState } from 'react';
import ImageCard from '@/components/common/ImageCard';
import { ImageProps } from '@/interfaces';

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const fakeImageUrl = `https://picsum.photos/seed/${Date.now()}/300`; 
      setImageUrl(fakeImageUrl);
      setGeneratedImages((prev) => [...prev, { imageUrl: fakeImageUrl, prompt }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleCardClick = (imagePath: string) => {
    setImageUrl(imagePath);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">Generate stunning images based on your prompts!</p>

        {/* Input and Button */}
        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            disabled={isLoading}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {isLoading ? "Generating..." : "Generate Image"}
          </button>
        </div>

        {/* Display Current Image */}
        {imageUrl && (
          <ImageCard
            imageUrl={imageUrl}
            prompt={prompt}
            action={handleCardClick}
          />
        )}

        {/* Display All Generated Images */}
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generatedImages.map((img, index) => (
            <ImageCard
              key={index}
              imageUrl={img.imageUrl}
              prompt={img.prompt}
              width="small"
              action={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;