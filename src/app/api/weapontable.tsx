// import { NextResponse } from 'next/server';
// import connection from '../api/mysql';

// const weapontable = ({ results }: any) => {

//     return (
//         // data.map((weapon:any) => {
//         //     return (
//         //         <tr key={weapon.id}>

                   

//         //         </tr >
//         //     )
//         // })
//         console.log(results)

//     );
//   };

//   export async function GET() {
//     try {
//         const results = await new Promise((resolve, reject) => {
//             connection.query("SELECT * FROM sheet1", (err: any, results: []) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });
//         console.log(results);
//         return NextResponse.json(results);
//     } catch (error) {
//         return NextResponse.json(
//             { message: error },
//             {
//                 status: 500
//             }
//         );
//     }
//   }
//   export default weapontable;