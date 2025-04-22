"use client";

import Image from "next/image";
import {
  useDogsControllerGetImage,
  useDogsControllerGetBreeds,
} from "nestjs-api-hooks";

export default function Home() {
  const { data: imageData, isLoading: imageLoading } = useDogsControllerGetImage();
  const { data: breedData, isFetched: breedFetched } = useDogsControllerGetBreeds();

  const imageUrl = !imageLoading ? (imageData?.data as unknown as string) : null;

  const flattenedBreeds = breedData?.data
    ? Object.entries(breedData.data).flatMap(([main, subs]) =>
      subs.length ? subs.map((sub: string) => `${main} ${sub}`) : [main]
    )
    : [];

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="header mb-5">
        <h1 className="text-5xl mb-2">🐶 Dog Listing Homepage - NextJS</h1>
        <p className="text-2xl text-gray-400">Browse adorable dogs by breed!</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl shadow-xl max-w-[500px]">
        {imageUrl ? (
          <Image
            className="w-full h-auto rounded-xl"
            src={imageUrl}
            alt="Random dog"
            width={700}
            height={700}
            priority
          />
        ) : (
          <p>Loading a cute dog...</p>
        )}
      </div>

      <div className="bg-gray-800 p-4 px-8 rounded-xl shadow-xl max-w-[500px] w-full">
        <h2 className="text-2xl mb-4">Dog Breeds</h2>
        {breedFetched ? (
          <ul className="list-none p-0">
            {flattenedBreeds.slice(0, 10).map((breed, idx) => (
              <li key={idx} className="py-1 border-b border-gray-600 text-gray-300">
                {breed}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading breeds...</p>
        )}
      </div>
    </div>
  );
}
