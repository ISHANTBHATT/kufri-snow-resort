import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <Homepage />
    </div>
  );
}
