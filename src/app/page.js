import Counter from "../components/Counter";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <>
      <StoreProvider>
        <main>
          <h1>Nunito</h1>
          {/* <Counter /> */}
        </main>
      </StoreProvider>
    </>
  );
}
