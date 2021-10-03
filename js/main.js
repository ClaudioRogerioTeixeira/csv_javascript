//javascript
window.onload = function () {
  const uploadconfirm = document.getElementById('uploadconfirm').addEventListener('click', () => {
    Papa.parse(document.getElementById('uploadfile').files[0], {
      download: true,
      header: true,
      skipEmptLines: true,
      complete: function (results) {
        console.log(results);
      }
    });
  });
}

// jquery
// $(function () {
//   $("#uploadconfirm").click(function () {
//     Papa.parse(document.getElementById('uploadfile').files[0], {
//       download: true,
//       header: true,
//       skipEmptLines: true,
//       complete: function (results) {
//         console.log(results);
//       }
//     });

//   });
// });
