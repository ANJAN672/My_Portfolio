document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const terminal = document.querySelector(".terminal");
  const terminalHeader = document.querySelector(".terminal-header");
  const terminalBody = document.querySelector(".terminal-body");
  const animatedNameEl = document.getElementById("animated-name");
  const nameShuffleScreen = document.getElementById("name-shuffle-screen"); // Add this div wrapping animated-name in HTML

  // Initial styles
  terminal.style.backgroundColor = "#000";
  terminalHeader.style.backgroundColor = "#000";
  terminalHeader.style.color = "#0f0";
  terminalBody.style.color = "#0f0";

  // Hide terminal initially, show name shuffle screen
  terminal.style.display = "none";
  if (nameShuffleScreen) nameShuffleScreen.style.display = "flex";

  // Name shuffle animation setup
  const name = "ANJAN B";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const shuffleDuration = 2500; // 2.5 seconds
  const frameRate = 50;
  const totalFrames = shuffleDuration / frameRate;

  let display = Array.from(name).map(c => (c === " " ? " " : "_"));
  animatedNameEl.textContent = display.join("");

  let frame = 0;
  const interval = setInterval(() => {
    display = display.map((c, i) => {
      if (name[i] === " ") return " ";
      if (frame > (i / name.length) * totalFrames) {
        return name[i];
      }
      return chars.charAt(Math.floor(Math.random() * chars.length));
    });

    animatedNameEl.textContent = display.join("");
    frame++;

    if (frame >= totalFrames) {
      clearInterval(interval);

      // Fade out name shuffle screen
      if (nameShuffleScreen) {
        nameShuffleScreen.style.transition = "opacity 0.8s ease";
        nameShuffleScreen.style.opacity = "0";
      }

      // After fade out, hide shuffle and show terminal with prompt
      setTimeout(() => {
        if (nameShuffleScreen) nameShuffleScreen.style.display = "none";
        terminal.style.display = "block";

        appendPrompt();
      }, 800);
    }
  }, frameRate);

  // Terminal command history & theming
  const commandHistory = [];
  let historyIndex = 0;
  let themeColors = {
    textColor: "#0f0",
    headerColor: "white",
  };

  // Commands implementation
  const commands = {
    help: () => `
      <span style="color:${themeColors.textColor};">help</span>${"&nbsp;".repeat(9)}- List all Commands <br>
      <span style="color:${themeColors.textColor};">welcome</span>${"&nbsp;".repeat(6)}- Introductory Section <br>
      <span style="color:${themeColors.textColor};">edu</span>${"&nbsp;".repeat(10)}- Academics <br>
      <span style="color:${themeColors.textColor};">email</span>${"&nbsp;".repeat(8)}- Reach out on Email <br>
      <span style="color:${themeColors.textColor};">projects</span>${"&nbsp;".repeat(5)}- My Projects <br>
      <span style="color:${themeColors.textColor};">skills</span>${"&nbsp;".repeat(7)}- My current Skill Set <br>
      <span style="color:${themeColors.textColor};">socials</span>${"&nbsp;".repeat(6)}- Social Media Profiles <br>
      <span style="color:${themeColors.textColor};">cv</span>${"&nbsp;".repeat(11)}- Check out my CV <br>
      <span style="color:${themeColors.textColor};">resume</span>${"&nbsp;".repeat(7)}- Check out my Resume <br>
      <span style="color:${themeColors.textColor};">themes</span>${"&nbsp;".repeat(7)}- Website Themes <br>
      <span style="color:${themeColors.textColor};">clear</span>${"&nbsp;".repeat(8)}- Clear the Terminal <br>
      <span style="color:${themeColors.textColor};">exit</span>${"&nbsp;".repeat(9)}- Close Tab <br>
      <hr>
    `,
    ls: () => commands.help(),
    welcome: `Hi!, I am Anjan B, welcome to my portfolio website!, (TODO) GUI version.
              Passionate AI enthusiast and Sofware Engineer (Python Developer) with experience in backend development, AI/ML, and distributed computing. Proven expertise in Python, machine learning, cloud computing, and sofware optimization. Passionate about solving complex engineering challenges and building scalable applications.
              Student @ SIET Tumkur, actively contributing to AI projects,
              and currently interning @<a href = "https://www.prodigalai.com" target = "_blank" style = "color: #0cf;">Prodigal AI</a>.<hr>
    `,
    edu: () => `
      <span style="color:${themeColors.textColor};">Shridevi Institute of Engineering and Technology</span> | 2022 - 2026 <br>
      <span style="color:${themeColors.textColor};">Presidency PU College</span> | 2020 - 2022 <br>
      <span style="color:${themeColors.textColor};">Cordial English High School</span> | 2007 - 2020<hr>
    `,
    email: () => {
      window.open("mailto:anjan.b.s.007@gmail.com");
      return "Reach out at: anjan.b.s.007@gmail.com<hr>";
    },
    projects: `Checkout my <a href="https://github.com/ANJAN672" target="_blank" style="color: #0cf;">github</a> to see all my projects <hr>
      These are some highlights: <br>
      <a href="https://github.com/ANJAN672/MindRag_vGPU" target="_blank" style="color: #0cf;">MindRAG (Retreival Augmented Generation)</a> <br>
      <a href="https://github.com/ANJAN672/PharmaGEN" target="_blank" style="color: #0cf;">PharmaGEN</a> <br>
      <a href="https://parkonixdeeplearning.streamlit.app/" target="_blank" style="color: #0cf;">Parkonix Deep Learning</a> <br>
      <a href="https://bloodgroupdetectionusingfingerprintcnn-ixcydpq99teq6uhhonfkbk.streamlit.app/" target="_blank" style="color: #0cf;">Blood Group Detection using Fingerprint CNN</a> <br>
      <a href="https://github.com/ANJAN672/AgroBloom" target="_blank" style="color: #0cf;">AgroBloom</a> <br>
      <a href="https://github.com/ANJAN672/Anomaly-Detection-using-Pytorch-Deep-Learning" target="_blank" style="color: #0cf;">Anomaly Detection Using Pytorch</a> <br>
      <a href="https://github.com/ANJAN672/thyroid-buddy" target="_blank" style="color: #0cf;">Thyroid Buddy (Baic NLP)</a><hr>
    `,
    skills: () => `
      <span style="color:${themeColors.textColor};">Languages</span>:${"&nbsp;".repeat(2)}Python, JavaScript, Bash, Nodejs, R, Julia <br>
      <span style="color:${themeColors.textColor};">Tools</span>:${"&nbsp;".repeat(6)}Git, Docker, Kubernetes, PostMan ${"&nbsp;".repeat(12)}Tracer, Prometheus, Grafana <br>
      <span style="color:${themeColors.textColor};">Frameworks</span>:${"&nbsp;".repeat(1)}OpenSSL, Flask, MERN, FastAPI, PyTorch, Transformers, PEFT, Langchain, Streamlit <br>
      <span style="color:${themeColors.textColor};">Platforms</span>:${"&nbsp;".repeat(2)}Linux, Web, Windows, GCP, Azure, AWS <br>
      <hr>
    `,
    socials: `Connect with me <br>
      1. <a href="https://www.linkedin.com/in/anjan-b-35a884295/" target="_blank" style="color: #0fc;">LinkedIn</a> <br>
      2. <a href="https://github.com/ANJAN672" target="_blank" style="color: #0fc;">GitHub</a> <br>
      3. <a href="https://x.com/anjan_046" target="_blank" style="color: #0fc;">X(Twitter)</a> <br><hr>
    `,
    cv: () => {
      window.open("https://drive.google.com/file/d/1M7Z3JKyN77J4GbXjQfUFDGHtdFGPQDsl/view?usp=sharing");
      return "May not be the latest! xD";
    },
    resume: () => {
      window.open("https://drive.google.com/file/d/1M7Z3JKyN77J4GbXjQfUFDGHtdFGPQDsl/view?usp=sharing");
      return "May not be the latest! xD";
    },
    themes: `hacker <br> personal <br> dracula <br> solarized dark <br> monokai <br> nord <br> vcs <br><br>type 'theme to theme-name'.<hr>
    `,
    "theme to hacker": () => {
      terminal.style.backgroundColor = "#000";
      terminalHeader.style.backgroundColor = "#000";
      terminalHeader.style.color = "#0f0";
      terminalBody.style.color = "#0f0";
      themeColors.textColor = "#0f0";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#0cf"));
      return "Switched to Hacker theme!";
    },
    "theme to personal": () => {
      terminal.style.backgroundColor = "#0D1926";
      terminalHeader.style.backgroundColor = "#252526";
      terminalHeader.style.color = "#B4E1FD";
      terminalBody.style.color = "#B4E1FD";
      themeColors.textColor = "#B4E1FD";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#1E8EFF"));
      return "Switched to my Personal theme!";
    },
    "theme to dracula": () => {
      terminal.style.backgroundColor = "#282a36";
      terminalHeader.style.backgroundColor = "#44475a";
      terminalHeader.style.color = "#f8f8f2";
      terminalBody.style.color = "#f8f8f2";
      themeColors.textColor = "#f8f8f2";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#8be9fd"));
      return "Switched to my Dracula theme!";
    },
    "theme to solarized dark": () => {
      terminal.style.backgroundColor = "#002b36";
      terminalHeader.style.backgroundColor = "#073642";
      terminalHeader.style.color = "#93a1a1";
      terminalBody.style.color = "#93a1a1";
      themeColors.textColor = "#93a1a1";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#268bd2"));
      return "Switched to my Solarized Dark theme!";
    },
    "theme to monokai": () => {
      terminal.style.backgroundColor = "#272822";
      terminalHeader.style.backgroundColor = "#383830";
      terminalHeader.style.color = "#F8F8F2";
      terminalBody.style.color = "#F8F8F2";
      themeColors.textColor = "#F8F8F2";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#A6E22E"));
      return "Switched to my Monokai theme!";
    },
    "theme to nord": () => {
      terminal.style.backgroundColor = "#2E3440";
      terminalHeader.style.backgroundColor = "#3B4252";
      terminalHeader.style.color = "#D8DEE9";
      terminalBody.style.color = "#D8DEE9";
      themeColors.textColor = "#D8DEE9";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#88C0D0"));
      return "Switched to my Nord theme!";
    },
    "theme to vcs": () => {
      terminal.style.backgroundColor = "#1e1e1e";
      terminalHeader.style.backgroundColor = "#252526";
      terminalHeader.style.color = "#d4d4d4";
      terminalBody.style.color = "#d4d4d4";
      themeColors.textColor = "#d4d4d4";
      document.querySelectorAll("a").forEach((link) => (link.style.color = "#569cd6"));
      return "Switched to my VCS theme!";
    },
    clear: () => {
      terminalBody.innerHTML = "";
      return "";
    },
    exit: () => {
      const closeMsg = "Closing session... <small>(Close manually if stuck)</small>";
      try {
        window.open("", "_self").close();
        setTimeout(() => window.close(), 100);
      }
      catch (error) {
        return `${closeMsg}<br>Error: ${error.message}`;
      }
      return closeMsg;
    },
  };

  const enterComm = (input) => {
    const [commandName, ...args] = input.toLowerCase().split(" ");
    const fullCmd = `${commandName} ${args.join(" ")}`.trim();
    let result;

    if (commands[fullCmd]) {
      result =
        typeof commands[fullCmd] === "function"
          ? commands[fullCmd](args)
          : commands[fullCmd];
    }
    else if (commands[commandName]) {
      result =
        typeof commands[commandName] === "function"
          ? commands[commandName](args)
          : commands[commandName];
    }
    else {
      result = `Command not found: ${commandName}`;
    }
    return result;
  };

  const appendPrompt = () => {
    const promptEl = document.createElement("p");
    promptEl.className = "prompt";
    promptEl.innerHTML = "~$ <span contenteditable='true' class='user-input'></span>";
    terminalBody.appendChild(promptEl);

    const userInput = promptEl.querySelector(".user-input");
    userInput.focus();

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const command = userInput.textContent.trim();
        if (command) {
          commandHistory.push(command);
          historyIndex = commandHistory.length;
          userInput.setAttribute("contenteditable", "false");
          const output = enterComm(command);
          if (output) {
            const outEl = document.createElement("p");
            outEl.style.color = "white";
            outEl.innerHTML = output;
            terminalBody.appendChild(outEl);
          }
          appendPrompt();
        }
      } else if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
          historyIndex--;
          userInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(userInput);
        }
      } else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          userInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(userInput);
        } else {
          historyIndex = commandHistory.length;
          userInput.textContent = "";
        }
      }
    });
  };

  const placeCaretAtEnd = (el) => {
    el.focus();
    if (window.getSelection && document.createRange) {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.body.createTextRange) {
      const textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  };

});
