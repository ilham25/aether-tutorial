const orderedList = document.querySelector(".tutor-install .content ol");
const dotfilesList = document.querySelector(
  ".tutor-install .dotfiles .content ol"
);

const dotfilesData = [
  {
    name: "General Config",
    scripts: [
      "git clone https://github.com/ilham25/dotfiles-aether",
      "cd dotfiles-aether/ && cp -r {.*,*} ~/",
      "rm -r ~/{README.md,LICENSE,.git} # Delete unnecessary files",
    ],
  },
  {
    name: "Icons",
    scripts: [
      "cd ~/.icons/",
      "tar -Jxvf oomox-aesthetic-light.tar.xz && tar -Jxvf oomox-aesthetic-dark.tar.xz",
      "sudo cp -r {oomox-aesthetic-light,oomox-aesthetic-dark} /usr/share/icons/",
      "rm -r ~/.icons/{oomox-aesthetic-light,oomox-aesthetic-dark,*.tar.xz} # Delete unnecessary files",
    ],
  },
  {
    name: "Refresh font cache",
    scripts: ["fc-cache -rv"],
  },
];

const tutorList = (targetList, targetDistro, targetData) => {
  targetData.map((data) => {
    const { name, scripts } = data;
    const list = document.createElement("li");
    list.innerText = name;
    targetList.appendChild(list);
    scripts.forEach((script) => {
      const codeContainer = document.createElement("div");
      codeContainer.classList.add("code-container", targetDistro);
      const code = document.createElement("code");
      code.innerText = script;
      codeContainer.appendChild(code);
      targetList.appendChild(codeContainer);
    });
  });
};
