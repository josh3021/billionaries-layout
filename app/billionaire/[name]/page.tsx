import { IBillionaireDetails } from "@/interfaces/billionaire";
import Image from "next/image";

interface IBillionaireDetailsProps {
  params: {
    name: string;
  };
}

async function getBillionaireProfile(name: string) {
  return fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${name}`
  ).then<IBillionaireDetails>((res) => res.json());
}

export default async function BillionaireProfile({
  params: { name },
}: IBillionaireDetailsProps) {
  const profile = await getBillionaireProfile(name);
  return (
    <main className="size-full p-8">
      <div className="w-full h-80 flex space-x-8 mb-4">
        <div className="size-80 relative rounded overflow-hidden">
          <Image
            src={profile.squareImage}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <h1 className="text-2xl font-bold">
            {profile.name} #{profile.position}
          </h1>
          <h3 className="text-lg">
            Networth: ${Math.round(profile.netWorth / 1000)} Billion
          </h3>
          <h3 className="text-lg">
            Live in {profile.country}, {profile.city}
            {profile.state && `, ${profile.state}`}
          </h3>
          <h4 className="text-lg">Industry: {profile.industries.join(", ")}</h4>
        </div>
      </div>
      <p className="text-lg mb-8">{profile.bio.join(" ")}</p>
      {profile.financialAssets && profile.financialAssets.length > 0 && (
        <>
          <h6 className="text-xl font-bold mb-4">Financial Assets</h6>
          <div className="grid grid-cols-4 gap-4">
            {profile.financialAssets.map((asset, index) => (
              <div key={index} className="border rounded-xl flex flex-col p-4">
                <span>Company: {asset.companyName}</span>
                <span>{asset.currencyCode}</span>
                {asset.currentPrice && (
                  <span>Current: {asset.currentPrice}</span>
                )}
                <span>
                  {asset.exchange} / {asset.exchangeRate}
                </span>
                <span>{asset.interactive}</span>
                <span>Ticker: {asset.ticker}</span>
                <span>Number Of Shares:{asset.numberOfShares}</span>
                <span>Shares: {asset.sharePrice}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
