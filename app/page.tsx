import { Billionaire } from "@/components/billionaire";
import { IBillionaire } from "@/interfaces/billionaire";

async function getBillionaires() {
  const billionaires = await fetch(
    "https://billions-api.nomadcoders.workers.dev"
  ).then<IBillionaire[]>((res) => res.json());
  return billionaires;
}

export default async function Home() {
  const billionaires = await getBillionaires();
  return (
    <main className="size-full my-4">
      <h1 className="mb-4 text-center text-2xl font-bold">
        World Billionaires Ranking
      </h1>
      <div className="grid grid-cols-4 gap-4 size-full">
        {billionaires.map((billionaire, index) => (
          <Billionaire
            key={billionaire.id}
            billionaire={billionaire}
            index={index + 1}
          />
        ))}
      </div>
    </main>
  );
}
