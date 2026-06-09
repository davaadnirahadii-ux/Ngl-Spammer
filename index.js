const fetch = require("node-fetch");
const readline = require("readline-sync");
const chalk = require("chalk");
const delay = require("delay");
const Spinnies = require("spinnies");
const crypto = require("crypto");

const spinnies = new Spinnies({
  spinner: {
    interval: 200,
    frames: ["∙∙∙", "●∙∙", "∙●∙", "∙∙●", "∙∙∙"],
  },
});

console.log(
  chalk.red(
    "\n" +
    "⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀\n" +
    "⠀⣠⠾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⢦⠀\n" +
    "⢰⠇⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠈⣧\n" +
    "⠘⡇⠀⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⣿\n" +
    "⠀⡇⠘⡄⢱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⢁⡆⢀⡏\n" +
    "⠀⠹⣄⠹⡀⠙⣄⠀⠀⠀⠀⠀⢀⣤⣴⣶⣶⣶⣾⣶⣶⣶⣶⣤⣀⠀⠀⠀⠀⠀⢀⠜⠁⡜⢀⡞⠀\n" +
    "⠀⠀⠘⣆⢣⡄⠈⢣⡀⢀⣤⣾⣿⣿⢿⠉⠉⠉⠉⠉⠉⠉⣻⢿⣿⣷⣦⣄⠀⡰⠋⢀⣾⢡⠞⠀⠀\n" +
    "⠀⠀⠀⠸⣿⡿⡄⡀⠉⠙⣿⡿⠁⠈⢧⠃⠀⠀⠀⠀⠀⠀⢷⠋⠀⢹⣿⠛⠉⢀⠄⣞⣧⡏⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠸⣿⣹⠘⡆⠀⡿⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢻⡆⢀⡎⣼⣽⡟⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⣹⣿⣇⠹⣼⣷⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣳⡜⢰⣿⣟⡀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⡾⡉⠛⣿⠴⠳⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠳⢾⠟⠉⢻⡀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⣿⢹⠀⢘⡇⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⡏⠀⡼⣾⠇⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢹⣼⠀⣾⠀⣀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣄⡀⢹⠀⢳⣼⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢸⣇⠀⠸⣾⠁⠀⠀⠀⠀⠀⢀⡾⠀⠀⠀⠰⣄⠀⠀⠀⠀⠀⠀⣹⡞⠀⣀⣿⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠈⣇⠱⡄⢸⡛⠒⠒⠒⠒⠚⢿⣇⠀⠀⠀⢠⣿⠟⠒⠒⠒⠒⠚⡿⢀⡞⢹⠇⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⡞⢰⣷⠀⠑⢦⣄⣀⣀⣠⠞⢹⠀⠀⠀⣸⠙⣤⣀⣀⣀⡤⠞⠁⢸⣶⢸⡄⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠰⣧⣰⠿⣄⠀⠀⠀⢀⣈⡉⠙⠏⠀⠀⠀⠘⠛⠉⣉⣀⠀⠀⠀⢀⡟⣿⣼⠇⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⢀⡿⠀⠘⠷⠤⠾⢻⠞⠋⠀⠀⠀⠀⠀⠀⠀⠘⠛⣎⠻⠦⠴⠋⠀⠹⡆⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠸⣿⡀⢀⠀⠀⡰⡌⠻⠷⣤⡀⠀⠀⠀⠀⣠⣶⠟⠋⡽⡔⠀⡀⠀⣰⡟⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠙⢷⣄⡳⡀⢣⣿⣀⣷⠈⠳⣦⣀⣠⡾⠋⣸⡇⣼⣷⠁⡴⢁⣴⠟⠁⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠈⠻⣶⡷⡜⣿⣻⠈⣦⣀⣀⠉⠀⣀⣠⡏⢹⣿⣏⡼⣡⡾⠃⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣻⡄⠹⡙⠛⠿⠟⠛⡽⠀⣿⣻⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡏⢏⢿⡀⣹⢲⣶⡶⢺⡀⣴⢫⢃⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠈⠷⠭⠽⠛⠛⠛⠋⠭⠴⠋⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣄⡀⢀⣀⣠⣀⣀⢀⣀⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n"
  )
);

console.log(chalk.bold.yellow("    | NGL Spammer | Using Javascript | Coded By DavaXploitt\n - ") + chalk.red.bold("Pemalang ") + chalk.yellow.bold("Team\n"));

const start = async () => {
  spinnies.add("spinner-1", { text: "Connecting to server...", color: "cyan" });
  
  try {
    const stat = await fetch("https://ngl.link");
    if (stat.status == 200) {
      await delay(4000);
      spinnies.succeed("spinner-1", { text: "Server Aktif!", color: "green" });
    } else {
      spinnies.fail("spinner-1", {
        text: "Server Error, Silahkan coba lain kali!",
        failColor: "redBright",
      });
      process.exit(1);
    }
  } catch (err) {
    spinnies.fail("spinner-1", {
      text: "Gagal konek ke server!",
      failColor: "redBright",
    });
    process.exit(1);
  }

  const pertanyaan = readline.question(chalk.cyan("Masukan Link/username: "));
  if (!pertanyaan) {
    console.log(chalk.red("Masukan Link Dengan Benar!"));
    return start();
  }

  let username = pertanyaan.replace(/https?:\/\/ngl.link\//gi, "").replace(/\/$/g, "");
  
  const teksnya = readline.question(chalk.cyan("Masukan Pesan: "));
  if (!teksnya) {
    console.log(chalk.red("Masukan Pesan Dengan Benar!"));
    return start();
  }
  const teks = teksnya;

  const jumlah = readline.questionInt(chalk.cyan("Masukan Jumlah Spam: "));
  if (!jumlah) {
    console.log(chalk.red("Masukan Jumlah Dengan Benar"));
    return start();
  }
  const spam = jumlah;

  spinnies.add("spinner-2", { text: "Starting, Wait...", color: "cyan" });
  await delay(5000);

  let sukses = 0;
  let gagal = 0;
  let no = 1;

  for (let i = 1; i <= spam; i++) {
    const deviceId = crypto.randomBytes(21).toString("hex");
    const url = "https://ngl.link/api/submit";
    
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
      "Accept": "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": `https://ngl.link/${username}`,
      "Origin": "https://ngl.link"
    };
    
    const body = `username=${username}&question=${teks}&deviceId=${deviceId}&gameSlug=&referrer=`;

    spinnies.update("spinner-2", {
      text: `Mengirim ${i}/${spam}...`,
      color: "yellow",
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (response.status == 200) {
        sukses++;
        console.log(chalk.green(`${no++}. Status: ${response.status} || Berhasil`));
      } else {
        gagal++;
        console.log(chalk.red(`${no++}. Status: ${response.status} || Gagal - Rate Limit`));
        await delay(25000);
      }
    } catch (err) {
      gagal++;
      console.log(chalk.red(`${no++}. Error: ${err.message}`));
    }
    
    if (i < spam) await delay(1000);
  }
  
  spinnies.succeed("spinner-2", {
    text: chalk.green(`\n✅ Sukses Mengirim!\nUsername: ${username}\nSukses: ${sukses}\nGagal: ${gagal}\nPesan: ${teks}`),
    color: "green",
  });
};

start();