const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;


const promiseOutput = async (terimaFilter) => {

  try {
    let bioskop1 = await promiseTheaterIXX();
    const DataEmosiBioskop = bioskop1.filter(
      (element) => {
        return element.hasil == terimaFilter;
      }
      
    )
    const jumlahEmosiBioskop1 = DataEmosiBioskop.length;

    let bioskop2 = await promiseTheaterVGC();
    const DataEmosiBioskop2 = bioskop2.filter(
      (element) => {
        return element.hasil == terimaFilter;
      }
    )
    const jumlahEmosiBioskopTotal = jumlahEmosiBioskop1 + DataEmosiBioskop2.length;
    return (jumlahEmosiBioskopTotal);

  } catch (err) {
    // Apabila ada terjadi error / rejected, akan masuk ke sini
    console.log(err);
  }
};


// const promiseOutput = (terimaFilter) => {

// return new Promise ((berhasil, gagal) => {
//     if (terimaFilter == null) {
//       gagal("Data Kosong");
//     } else {
//       let marah = promiseTheaterIXX();
//       const arraySetelahFilter = marah.filter(
//         (element) => {
//           return element.hasil == terimaFilter;
//         }
//       )
//       berhasil(arraySetelahFilter)
//     }
//   }

// )

// };

// promiseOutput();

(async () => {
  console.log(await promiseOutput("tidak marah")); // Output: 2
  console.log(await promiseOutput("marah")); // Output: 4
})();

module.exports = {
  promiseOutput,
};
