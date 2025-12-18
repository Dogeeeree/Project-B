fetch("https://backenddomain.epizy.com/api/test.php")
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText = data.message;
  });
