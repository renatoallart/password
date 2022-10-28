import { Display } from "./components/Display";
import { Form } from "./components/Form";
import { PasswordProvider } from "./context/PasswordProvider";
export function App() {
  return (
    <main className=" h-screen flex flex-col items-center justify-center">
      <PasswordProvider>
        <Display />
        <Form />
      </PasswordProvider>
    </main>
  );
}
