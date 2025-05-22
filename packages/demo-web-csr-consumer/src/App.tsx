import { useDogsControllerGetImage, useDogsControllerGetBreeds } from "nestjs-api-hooks";
import './App.css';

function App() {
  const { data: imageData, isFetched: imageFetched } = useDogsControllerGetImage();
  // const { data: breedData, isFetched: breedFetched } = useDogsControllerGetBreeds();

  const imageUrl = imageFetched ? (imageData?.data as unknown as string) : null;

  // const flattenedBreeds = breedFetched && breedData
  //   ? Object.entries(breedData.data).flatMap(([mainBreed, subBreeds]) =>
  //       subBreeds.length > 0
  //         ? subBreeds.map((sub: string) => `${mainBreed} ${sub}`)
  //         : [mainBreed]
  //     )
  //   : [];

  return (
    <div className="app">
      <header className="header">
        <h1>🐶 Dog Listing Homepage</h1>
        <p>Browse adorable dogs by breed!</p>
      </header>

      <main className="content">
        <section className="dog-card">
          {imageUrl ? (
            <img src={imageUrl} alt="A dog" className="dog-image" />
          ) : (
            <p>Loading a cute dog...</p>
          )}
        </section>

        <section className="breeds-list">
          <h2>Available Breeds</h2>
          <p>Need implementing</p>
          {/* {flattenedBreeds.length > 0 ? (
            <ul>
              {flattenedBreeds.slice(0,10).map((breed, index) => (
                <li key={index} className="breed-item">{breed}</li>
              ))}
              <li>And much more</li>
            </ul>
          ) : (
            <p>Loading breeds...</p>
          )} */}
        </section>
      </main>
    </div>
  );
}

export default App;
