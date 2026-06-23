import AppProvider from "@/app/providers.jsx";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      {" "}
      <AppProvider />
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{ className: "font-mono" }}
      />
    </>
  );
};

export default App;
