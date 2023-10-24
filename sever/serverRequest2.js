if (req.url.startsWith("/img/")) {
  let imageName = path.basename(req.url);
  let imagePath = "./img/" + imageName;
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, { "Contant-Type": "image/png" });
    res.end(data);
  });
}