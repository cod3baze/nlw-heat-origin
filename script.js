// const githubElement = document.getElementById("github")

const mediaLinks = {
  facebook: "eliasallex",
  youtube: "rocketseat",
  twitter: "rocketseat",
  instagram: "eliasall3x",
};

const userData = {
  id="eliasallex",
  username: "Elias sd alexandre",
  bio: "Programmer. Focused on technologies around the JS language.",
  avatarUrl: "https://github.com/eliasallex.png",
  socialLinks: { ...mediaLinks },
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${mediaLinks[social]}`;
  }
}

document.onload = changeSocialMediaLinks();
