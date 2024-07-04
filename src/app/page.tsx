import Image from "next/image";
import Weapontable from '../app/api/weapontable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 border">Name</th>
              <th scope="col" className="px-4 py-3 border">Damage</th>
              <th scope="col" className="px-4 py-3 bg-gray-50 dark:bg-gray-800">Impact</th>
              <th scope="col" className="px-4 py-3">Impact Resist</th>
              <th scope="col" className="px-4 py-3 bg-gray-50 dark:bg-gray-800">Protection</th>
              <th scope="col" className="px-4 py-3">Barrier</th>
              <th scope="col" className="px-4 py-3 bg-gray-50 dark:bg-gray-800">Stamina</th>
              <th scope="col" className="px-4 py-3">Speed</th>
              <th scope="col" className="px-4 py-3 bg-gray-50 dark:bg-gray-800">Damage Bonus</th>
              <th scope="col" className="px-4 py-3">Mana Cost</th>
              <th scope="col" className="px-4 py-3 bg-gray-50 dark:bg-gray-800">Durability</th>
              <th scope="col" className="px-4 py-3">Weight</th>
              <th scope="col" className="px-4 py-3 bg-gray-50 dark:bg-gray-800">Effect</th>
              <th scope="col" className="px-4 py-3">Class</th>
            </tr>
          </thead>
          {/* <tr>
            <td></td>
          </tr> */}
          <Weapontable/>
          
        </table>
      </div>
    </main>
  );
}
