import { Music2 } from "lucide-react";

export default function Topart() {
  const items = [
    { name: "Ezra Neethings", genre: "Pop", views: "13.5K" },
    { name: "Jackalass Onetym", genre: "Motswako", views: "10.2K" },
    { name: "Ozi F Teddy", genre: "Hip Hop", views: "8.7K" },
    { name: "Priscilla K", genre: "R&B", views: "12.3K" },
    { name: "Vee Mampeezy", genre: "Kwaito-kwasa", views: "9.8K" },
    { name: "Scar", genre: "Hip Hop", views: "8.3K" },
    { name: "KHOISAN", genre: "R&B", views: "7.5K" },
    { name: "dj Latimmy", genre: "Amapiano", views: "4.9K" }
  ];

  return (
    <div className="grid grid-cols-1 gap-2">
      {items.map((item, index) => (
        <div className="relative" key={index}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-transparent rounded opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
          <div className={`flex items-center py-1 px-2 rounded bg-muted/35 gap-2 hover:bg-muted/10 transition-colors duration-200 relative z-10`}>
            <h4 className="font-bold text-lg mr-2" style={{ color: index >= 3 ? 'gray' : '#34D399' }}>#{index + 1}</h4>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className=" text-xs">{item.name}</h4>
                  <p className="text-gray-500 text-xs font-roboto dark:text-gray-400">{item.genre}</p>
                </div>
                <div className="flex items-center gap-1 justify-center">
                  <Music2 className="w-3 h-3" />
                  <h1 className="text-xs">{item.views}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
