fetch("https://dogeland.xyz/backend/api/test.php")
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText = data.message;
  });
